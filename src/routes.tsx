import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Blog from "./pages/Blog";
import ButterflyEffect from "./pages/projects/ButterflyEffect";
import Inspiration from "./pages/Inspiration";
import Landing from "./pages/Landing";
import MainTemplate from "./pages/MainTemplate";
import ProjectTemplate from "./pages/ProjectTemplate";
import Projects from "./pages/Projects";
import Root from "./pages/Root";
import ILearn from "./pages/projects/ILearn";
import Vault from "./pages/projects/Vault";
import Terminal from "./pages/Terminal";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" index={true} element={<Terminal />} />
      <Route path="/" element={<MainTemplate />}>
        <Route path="welcome" element={<Landing />} />
        <Route path="projects" element={<Projects />} />
        <Route path="inspiration" element={<Inspiration />} />
        <Route path="blog" element={<Blog />} />
      </Route>
      <Route path="projects" element={<ProjectTemplate />}>
        <Route path="butterfly-effect" element={<ButterflyEffect />} />
        <Route path="ilearn" element={<ILearn />}></Route>
        <Route path="vault" element={<Vault />}></Route>
      </Route>
    </Route>
  )
);
