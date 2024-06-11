import { WhyIStartedProgramming } from "./why-i-started-programming/WhyIStartedProgramming";
import { TheButterflyEffect } from "./the-butterfly-effect/TheButterflyEffect";
import { LearningMoreByDoingLess } from "./learning-more-by-doing-less/LearningMoreByDoingLess";
import { WhyImScaredAboutTheFutureOfAI } from "./why-im-scared-about-the-future-of-ai/WhyImScaredAboutTheFutureOfAI";

export type BlogPost = {
  title: string;
  date: string;
  thumbnail: string;
  blurb: string;
  route: string;
  content: JSX.Element;
};

export const BlogPosts: BlogPost[] = [
  WhyImScaredAboutTheFutureOfAI,
  LearningMoreByDoingLess,
  TheButterflyEffect,
  WhyIStartedProgramming,
];

export default BlogPosts;
