
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Post } from "@/data/mockData";
import PostActions from "./PostActions";
import CommentSection from "./CommentSection";
import { formatTimeAgo } from "@/data/mockData";

interface FeedPostProps {
  post: Post;
}

const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  const handleLike = () => {
    console.log("Liked post:", post.id);
    // In the future, this will update Supabase
  };

  const handleComment = () => {
    console.log("Comment on post:", post.id);
    // Focus comment input
  };

  return (
    <div className="post-card">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={post.user.avatar} alt={post.user.username} />
            <AvatarFallback>{post.user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-sm">{post.user.username}</h4>
            <p className="text-xs text-gray-500">
              {formatTimeAgo(post.createdAt)}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      
      <div className="aspect-square relative w-full">
        <img
          src={post.imageUrl}
          alt="Post content"
          className="object-cover w-full h-full"
        />
      </div>
      
      <PostActions
        likeCount={post.likes}
        commentCount={post.comments.length}
        onLike={handleLike}
        onComment={handleComment}
      />
      
      <CommentSection
        comments={post.comments}
        postId={post.id}
        caption={post.caption}
        username={post.user.username}
        timestamp={post.createdAt}
      />
    </div>
  );
};

export default FeedPost;
