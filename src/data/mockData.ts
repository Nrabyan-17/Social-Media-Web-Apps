
import { randomUUID } from 'crypto';

export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
}

export interface Story {
  id: string;
  user: User;
  imageUrl: string;
  seen: boolean;
  createdAt: Date;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: Date;
  likes: number;
}

export interface Post {
  id: string;
  user: User;
  caption: string;
  imageUrl: string;
  likes: number;
  comments: Comment[];
  createdAt: Date;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    username: "alexjohnson",
    fullName: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    username: "sarahmiller",
    fullName: "Sarah Miller",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "3",
    username: "mikebrown",
    fullName: "Mike Brown",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "4",
    username: "emilywilson",
    fullName: "Emily Wilson",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "5",
    username: "chrisjones",
    fullName: "Chris Jones",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "6",
    username: "jessicasmith",
    fullName: "Jessica Smith",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    id: "7",
    username: "danieltaylor",
    fullName: "Daniel Taylor",
    avatar: "https://i.pravatar.cc/150?img=30",
  },
  {
    id: "8",
    username: "oliviamoore",
    fullName: "Olivia Moore",
    avatar: "https://i.pravatar.cc/150?img=32",
  }
];

// Mock Stories
export const mockStories: Story[] = [
  {
    id: "s1",
    user: mockUsers[0],
    imageUrl: "https://picsum.photos/id/237/500/800",
    seen: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60),
  },
  {
    id: "s2",
    user: mockUsers[1],
    imageUrl: "https://picsum.photos/id/238/500/800",
    seen: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 120),
  },
  {
    id: "s3",
    user: mockUsers[2],
    imageUrl: "https://picsum.photos/id/239/500/800",
    seen: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 180),
  },
  {
    id: "s4",
    user: mockUsers[3],
    imageUrl: "https://picsum.photos/id/240/500/800",
    seen: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 240),
  },
  {
    id: "s5",
    user: mockUsers[4],
    imageUrl: "https://picsum.photos/id/241/500/800",
    seen: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 300),
  },
  {
    id: "s6",
    user: mockUsers[5],
    imageUrl: "https://picsum.photos/id/242/500/800",
    seen: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 360),
  },
  {
    id: "s7",
    user: mockUsers[6],
    imageUrl: "https://picsum.photos/id/243/500/800",
    seen: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 420),
  },
  {
    id: "s8",
    user: mockUsers[7],
    imageUrl: "https://picsum.photos/id/244/500/800",
    seen: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 480),
  }
];

// Helper function to create comments
const createComments = (user: User, count: number = 3): Comment[] => {
  const comments: Comment[] = [];
  const commentTexts = [
    "This is amazing! 🔥",
    "Wow, I love this!",
    "Great shot! 📸",
    "Beautiful! ❤️",
    "Looks awesome!",
    "I need to try this!",
    "Incredible view 😍",
    "This made my day!",
    "Perfect moment captured",
    "Simply stunning"
  ];
  
  for (let i = 0; i < count; i++) {
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    const randomText = commentTexts[Math.floor(Math.random() * commentTexts.length)];
    const randomTime = new Date(Date.now() - Math.floor(Math.random() * 10000000));
    
    comments.push({
      id: `c${i}`,
      user: randomUser,
      content: randomText,
      createdAt: randomTime,
      likes: Math.floor(Math.random() * 50)
    });
  }
  
  return comments;
};

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: "p1",
    user: mockUsers[0],
    caption: "Beautiful day at the beach! 🏖️ #summer #beach #vacation",
    imageUrl: "https://picsum.photos/id/1015/1000/1000",
    likes: 246,
    comments: createComments(mockUsers[1], 4),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: "p2",
    user: mockUsers[2],
    caption: "Exploring new places this weekend 🌄 #adventure #travel #explore",
    imageUrl: "https://picsum.photos/id/1018/1000/1000",
    likes: 132,
    comments: createComments(mockUsers[3], 2),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
  },
  {
    id: "p3",
    user: mockUsers[4],
    caption: "Coffee and code - perfect morning ☕💻 #developer #coding #coffee",
    imageUrl: "https://picsum.photos/id/1022/1000/1000",
    likes: 378,
    comments: createComments(mockUsers[5], 5),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
  },
  {
    id: "p4",
    user: mockUsers[1],
    caption: "Just finished this book - highly recommend! 📚 #reading #bookclub",
    imageUrl: "https://picsum.photos/id/1025/1000/1000",
    likes: 98,
    comments: createComments(mockUsers[6], 3),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    id: "p5",
    user: mockUsers[6],
    caption: "Today's workout complete! 💪 #fitness #gym #motivation",
    imageUrl: "https://picsum.photos/id/1035/1000/1000",
    likes: 215,
    comments: createComments(mockUsers[0], 2),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: "p6",
    user: mockUsers[3],
    caption: "Making some music 🎸 #musician #studio #recording",
    imageUrl: "https://picsum.photos/id/1074/1000/1000",
    likes: 187,
    comments: createComments(mockUsers[2], 4),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36),
  },
  {
    id: "p7",
    user: mockUsers[5],
    caption: "Perfect sunset tonight 🌅 #sunset #nature #views",
    imageUrl: "https://picsum.photos/id/1042/1000/1000",
    likes: 423,
    comments: createComments(mockUsers[4], 6),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
  },
  {
    id: "p8",
    user: mockUsers[7],
    caption: "New art piece finished today 🎨 #art #creative #painting",
    imageUrl: "https://picsum.photos/id/1059/1000/1000",
    likes: 156,
    comments: createComments(mockUsers[7], 3),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
  }
];

// Generate more posts for infinite scrolling
export const generateMorePosts = (count: number = 5): Post[] => {
  const newPosts: Post[] = [];
  const imageIds = [1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080];
  
  for (let i = 0; i < count; i++) {
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    const randomImageId = imageIds[Math.floor(Math.random() * imageIds.length)];
    const captions = [
      "Just another day in paradise 🌴 #lifestyle",
      "Good vibes only ✨ #positivity",
      "Can't beat this view! #travel #adventure",
      "Weekend mode: on 🎉 #weekend #fun",
      "New memories being made 📸 #memories #friends",
      "Living my best life 💯 #blessed #gratitude",
      "This place is magical ✨ #discover #explore",
      "Perfect day for an outdoor adventure! #outdoors #nature"
    ];
    
    newPosts.push({
      id: `p${Date.now() + i}`,
      user: randomUser,
      caption: captions[Math.floor(Math.random() * captions.length)],
      imageUrl: `https://picsum.photos/id/${randomImageId}/1000/1000`,
      likes: Math.floor(Math.random() * 500),
      comments: createComments(randomUser, Math.floor(Math.random() * 6) + 1),
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 96))
    });
  }
  
  return newPosts;
};

// Utility functions
export const formatTimeAgo = (date: Date): string => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + "y";
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + "mo";
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + "d";
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + "h";
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + "m";
  
  return Math.floor(seconds) + "s";
};
