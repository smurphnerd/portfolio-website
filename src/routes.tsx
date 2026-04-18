import { lazy, Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from "./pages/Landing";
import MainTemplate from "./pages/MainTemplate";
import Root from "./pages/Root";
import { ArticleLayout } from "./pages/ArticleLayout";

const Inspiration = lazy(() => import("./pages/Inspiration"));
const BlogHome = lazy(() => import("./pages/BlogHome"));
const ProjectsHome = lazy(() => import("./pages/ProjectsHome"));
const ProjectRoute = lazy(() => import("./pages/ProjectRoute"));
const BlogRoute = lazy(() => import("./pages/BlogRoute"));

const lazyRoute = (element: React.ReactNode) => (
  <Suspense fallback={null}>{element}</Suspense>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<Landing />} />
        <Route path="projects" element={lazyRoute(<ProjectsHome />)} />
        <Route path="inspiration" element={lazyRoute(<Inspiration />)} />
        <Route path="blog" element={lazyRoute(<BlogHome />)} />
      </Route>
      <Route path="projects" element={<ArticleLayout link="/projects" />}>
        <Route path=":slug" element={lazyRoute(<ProjectRoute />)} />
      </Route>
      <Route path="blog" element={<ArticleLayout link="/blog" />}>
        <Route path=":slug" element={lazyRoute(<BlogRoute />)} />
      </Route>
    </Route>,
  ),
);
