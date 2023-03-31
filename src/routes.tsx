import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Blog from "./pages/Blog";
import ButterflyEffect from "./pages/ButterflyEffect";
import Inspiration from "./pages/Inspiration";
import Landing from "./pages/Landing";
import MainTemplate from "./pages/MainTemplate";
import Projects from "./pages/Projects";
import Root from "./pages/Root";
import ProjectTemplate from "./pages/ProjectTemplate";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<></>} />
      <Route path="/" element={<MainTemplate />}>
        <Route path="welcome" element={<Landing />} />
        <Route path="projects" element={<Projects />} />
        <Route path="inspiration" element={<Inspiration />} />
        <Route path="blog" element={<Blog />} />
      </Route>
      <Route path="projects" element={<ProjectTemplate />}>
        <Route path="butterfly-effect" element={<ButterflyEffect />}></Route>
      </Route>
    </Route>
  )
);
