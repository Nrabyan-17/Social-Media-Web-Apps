
import React, { useState } from "react";
import { formatTimeAgo } from "@/data/mockData";
import type { Comment } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface CommentSectionProps {
  comments: Comment[];
  postId: string;
  caption: string;
  username: string;
  timestamp: Date;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  postId,
  caption,
  username,
  timestamp,
}) => {
  const [showAllComments, setShowAllComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  
  const visibleComments = showAllComments ? comments : comments.slice(0, 2);
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log("New comment:", newComment, "on post:", postId);
      setNewComment("");
      // In the future, this will add to Supabase
    }
  };

  return (
    <div className="px-4 pb-4">
      <div className="mb-3">
        <p className="text-sm">
          <span className="font-semibold">{username}</span>{" "}
          <span>{caption}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {formatTimeAgo(timestamp)}
        </p>
      </div>
      
      {comments.length > 2 && !showAllComments && (
        <button
          className="text-sm text-gray-500 mb-2"
          onClick={() => setShowAllComments(true)}
        >
          View all {comments.length} comments
        </button>
      )}
      
      {visibleComments.map((comment) => (
        <div key={comment.id} className="mb-2">
          <p className="text-sm">
            <span className="font-semibold">{comment.user.username}</span>{" "}
            <span>{comment.content}</span>
          </p>
          <div className="flex items-center space-x-3 mt-1 text-xs text-gray-500">
            <span>{formatTimeAgo(comment.createdAt)}</span>
            {comment.likes > 0 && <span>{comment.likes} likes</span>}
            <button className="font-medium">Reply</button>
          </div>
        </div>
      ))}
      
      <form 
        onSubmit={handleSubmitComment} 
        className="flex items-center mt-3 space-x-2"
      >
        <Input
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="text-sm"
        />
        <Button 
          type="submit" 
          size="sm" 
          variant="ghost" 
          disabled={!newComment.trim()}
          className="text-social hover:text-social-dark disabled:opacity-50"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default CommentSection;
