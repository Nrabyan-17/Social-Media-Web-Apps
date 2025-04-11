
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '@/components/Header';
import StoryCarousel from '@/components/StoryCarousel';
import FeedPost from '@/components/FeedPost';
import { mockStories, mockPosts, generateMorePosts, type Post } from '@/data/mockData';
import { Loader2 } from 'lucide-react';

const Index: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = useCallback(() => {
    if (loading) return;
    
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const newPosts = generateMorePosts(3);
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setLoading(false);
      
      // After 30 posts, stop loading more (simulating end of feed)
      if (posts.length > 30) {
        setHasMore(false);
      }
    }, 1500);
  }, [loading, posts.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore) {
          loadMorePosts();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMorePosts, hasMore]);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Header />
      
      <main className="container max-w-xl mx-auto px-4 pt-6">
        <StoryCarousel stories={mockStories} />
        
        <div className="space-y-6">
          {posts.map(post => (
            <FeedPost key={post.id} post={post} />
          ))}
          
          {hasMore && (
            <div 
              ref={loaderRef} 
              className="flex justify-center items-center py-8"
            >
              {loading ? (
                <div className="flex flex-col items-center">
                  <Loader2 className="h-8 w-8 text-social animate-spin" />
                  <p className="text-sm text-gray-500 mt-2">Loading more posts...</p>
                </div>
              ) : (
                <div className="h-10" />
              )}
            </div>
          )}
          
          {!hasMore && (
            <div className="text-center py-8">
              <p className="text-gray-500">You've reached the end of your feed!</p>
              <p className="text-sm text-gray-400 mt-1">Check back later for new content</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
