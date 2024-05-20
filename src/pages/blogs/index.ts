import { WhyIStartedProgramming } from "./why-i-started-programming/WhyIStartedProgramming";
import { TheButterflyEffect } from "./the-butterfly-effect/TheButterflyEffect";
import { LearningMoreByDoingLess } from "./learning-more-by-doing-less/LearningMoreByDoingLess";

export type BlogPost = {
  title: string;
  date: string;
  thumbnail: string;
  blurb: string;
  route: string;
  content: JSX.Element;
};

export const BlogPosts: BlogPost[] = [
  WhyIStartedProgramming,
  TheButterflyEffect,
  LearningMoreByDoingLess,
];

export default BlogPosts;
