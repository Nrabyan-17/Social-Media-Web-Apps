
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import StoryItem from "./StoryItem";
import { Story } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface StoryCarouselProps {
  stories: Story[];
}

const StoryCarousel: React.FC<StoryCarouselProps> = ({ stories }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === "left" ? -280 : 280;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mb-6">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/90 shadow-sm hover:bg-white"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-auto py-2 px-4 scrollbar-none"
      >
        <div className="flex flex-col items-center space-y-1 cursor-pointer">
          <div className="story-ring-seen">
            <div className="story-image bg-gray-50 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-social flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          <span className="text-xs font-medium truncate w-16 text-center">
            Your story
          </span>
        </div>
        
        {stories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/90 shadow-sm hover:bg-white"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default StoryCarousel;
