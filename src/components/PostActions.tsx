
import React, { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostActionsProps {
  likeCount: number;
  commentCount: number;
  onLike: () => void;
  onComment: () => void;
}

const PostActions: React.FC<PostActionsProps> = ({
  likeCount,
  commentCount,
  onLike,
  onComment,
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setAnimate(true);
    onLike();
    
    // Remove animation class after animation completes
    setTimeout(() => {
      setAnimate(false);
    }, 300);
  };

  return (
    <div className="px-4 py-2">
      <div className="flex justify-between mb-2">
        <div className="flex items-center space-x-4">
          <button 
            className="post-action" 
            onClick={handleLike}
          >
            <Heart 
              className={cn(
                "h-6 w-6 transition-all",
                liked ? "fill-red-500 text-red-500" : "",
                animate ? "animate-like-pulse" : ""
              )} 
            />
          </button>
          <button className="post-action" onClick={onComment}>
            <MessageCircle className="h-6 w-6" />
          </button>
          <button className="post-action">
            <Send className="h-6 w-6" />
          </button>
        </div>
        <button className="post-action" onClick={() => setSaved(!saved)}>
          <Bookmark className={cn("h-6 w-6", saved ? "fill-social text-social" : "")} />
        </button>
      </div>
      
      <div className="text-sm font-semibold">{likeCount} likes</div>
    </div>
  );
};

export default PostActions;
