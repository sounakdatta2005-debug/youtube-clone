export type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  uploaded: string;
  duration: string;
  thumbnailGradient: string;
  description: string;
  subscribers: string;
};

export const videos: Video[] = [
  {
    id: "r1",
    title: "React in 15 Minutes: Build Your First Real App",
    channel: "Code Current",
    views: "1.2M views",
    uploaded: "2 weeks ago",
    duration: "15:18",
    thumbnailGradient: "linear-gradient(135deg, #ff6a00, #ee0979)",
    subscribers: "980K subscribers",
    description:
      "Build a polished React app quickly with modern component patterns, layout composition, and practical state management.",
  },
  {
    id: "n2",
    title: "Next.js App Router Crash Course 2026",
    channel: "Frontend Fuel",
    views: "842K views",
    uploaded: "1 month ago",
    duration: "22:44",
    thumbnailGradient: "linear-gradient(135deg, #4e54c8, #8f94fb)",
    subscribers: "1.4M subscribers",
    description:
      "Understand layouts, nested routes, and server components with a project-driven guide.",
  },
  {
    id: "d3",
    title: "Designing Better UI: Rhythm, Scale, and Contrast",
    channel: "Pixel Mechanics",
    views: "412K views",
    uploaded: "4 days ago",
    duration: "12:05",
    thumbnailGradient: "linear-gradient(135deg, #00b09b, #96c93d)",
    subscribers: "520K subscribers",
    description:
      "Learn practical design decisions that make interfaces feel intentional and premium.",
  },
  {
    id: "p4",
    title: "Performance Deep Dive: Why Your React App Feels Slow",
    channel: "Ship Faster",
    views: "2M views",
    uploaded: "3 months ago",
    duration: "27:31",
    thumbnailGradient: "linear-gradient(135deg, #232526, #414345)",
    subscribers: "2.1M subscribers",
    description:
      "Measure, diagnose, and optimize expensive renders and network bottlenecks.",
  },
  {
    id: "a5",
    title: "Animate with CSS Like a Product Team",
    channel: "Motion Lab",
    views: "274K views",
    uploaded: "6 days ago",
    duration: "09:59",
    thumbnailGradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    subscribers: "301K subscribers",
    description:
      "Create meaningful motion that improves clarity and delight in production UIs.",
  },
  {
    id: "b6",
    title: "TypeScript for React Developers: Beyond the Basics",
    channel: "Strict Mode",
    views: "690K views",
    uploaded: "5 months ago",
    duration: "31:12",
    thumbnailGradient: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    subscribers: "880K subscribers",
    description:
      "Use advanced TypeScript patterns to make large React codebases safer and faster to work in.",
  },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find((video) => video.id === id);
}
