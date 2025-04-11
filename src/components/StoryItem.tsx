
import React from "react";
import { Story } from "@/data/mockData";

interface StoryItemProps {
  story: Story;
}

const StoryItem: React.FC<StoryItemProps> = ({ story }) => {
  return (
    <div className="flex flex-col items-center space-y-1 cursor-pointer">
      <div className={story.seen ? "story-ring-seen" : "story-ring"}>
        <div className="story-image">
          <img
            src={story.user.avatar}
            alt={story.user.username}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs font-medium truncate w-16 text-center">
        {story.user.username}
      </span>
    </div>
  );
};

export default StoryItem;
