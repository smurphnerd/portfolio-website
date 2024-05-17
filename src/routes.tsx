import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Blog from "./pages/BlogHome";
import ButterflyEffect from "./pages/projects/ButterflyEffect";
import Inspiration from "./pages/Inspiration";
import Landing from "./pages/Landing";
import MainTemplate from "./pages/MainTemplate";
import Projects from "./pages/ProjectsHome";
import Root from "./pages/Root";
import ILearn from "./pages/projects/ILearn";
import Vault from "./pages/projects/Vault";
import { ArticleLayout } from "./pages/ArticleLayout";
import B from "./pages/blogs";
import Vodalogic from "./pages/projects/Vodalogic";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" element={<MainTemplate />}>
                <Route path="/" element={<Landing />} />
                <Route path="projects" element={<Projects />} />
                <Route path="inspiration" element={<Inspiration />} />
                <Route path="blog" element={<Blog />} />
            </Route>
            <Route path="projects" element={<ArticleLayout link="/projects" />}>
                <Route path="butterfly-effect" element={<ButterflyEffect />} />
                <Route path="ilearn" element={<ILearn />}></Route>
                <Route path="vault" element={<Vault />}></Route>
                <Route path="vodalogic" element={<Vodalogic />}></Route>
            </Route>
            <Route path="blog" element={<ArticleLayout link="/blog" />}>
                <Route
                    path="why-i-started-programming"
                    element={<B.WhyIStartedProgramming />}
                />
                <Route path="the-butterfly-effect" element={<B.TheButterflyEffect />} />
            </Route>
        </Route>,
    ),
);
