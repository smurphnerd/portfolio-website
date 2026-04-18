import {
  WhyImScaredAboutTheFutureOfAIThumbnail,
  LearningMoreByDoingLessThumbnail,
  TheButterflyEffectThumbnail,
  WhyIStartedProgrammingThumbnail,
} from "../../assets/thumbnails";

export type BlogPost = {
  title: string;
  date: string;
  thumbnail: string;
  blurb: string;
  route: string;
  content: string;
  markdownPath?: string;
};

export const BlogPosts: BlogPost[] = [
  {
    title: "Why I'm Scared About The Future Of AI",
    date: "Tuesday 11 June 2024",
    thumbnail: WhyImScaredAboutTheFutureOfAIThumbnail,
    blurb: "An explanation of some of my key concerns about the future of AI...",
    route: "why-im-scared-about-the-future-of-ai",
    content: "",
    markdownPath: "/blog/why-im-scared-about-the-future-of-ai.md",
  },
  {
    title: "Learning More by Doing Less",
    date: "Monday 20 May 2024",
    thumbnail: LearningMoreByDoingLessThumbnail,
    blurb: "An overview of my learnings from Coursera's Learning How to Learn by Dr. Barbara Oakley...",
    route: "learning-more-by-doing-less",
    content: "",
    markdownPath: "/blog/learning-more-by-doing-less.md",
  },
  {
    title: "The Butterfly Effect",
    date: "Tuesday 2 August 2022",
    thumbnail: TheButterflyEffectThumbnail,
    blurb: "A bit about my experience in developing my first full stack application from scratch...",
    route: "the-butterfly-effect",
    content: "",
    markdownPath: "/blog/the-butterfly-effect.md",
  },
  {
    title: "Why I Started Programming",
    date: "Thursday 16 June 2022",
    thumbnail: WhyIStartedProgrammingThumbnail,
    blurb: "The origin story of my programming journey. Find out where it all began...",
    route: "why-i-started-programming",
    content: "",
    markdownPath: "/blog/why-i-started-programming.md",
  },
];

export default BlogPosts;
