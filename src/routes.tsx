import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Inspiration from "./pages/Inspiration";
import Landing from "./pages/Landing";
import MainTemplate from "./pages/MainTemplate";
import Root from "./pages/Root";
import { ArticleLayout } from "./pages/ArticleLayout";
import { BlogPosts } from "./pages/blogs";
import { Helmet } from "react-helmet";
import BlogHome from "./pages/BlogHome";
import { Blog } from "./components/Blog";
import { Projects } from "./pages/projects";
import Project from "./components/Project";
import ProjectsHome from "./pages/ProjectsHome";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<Landing />} />
        <Route path="projects" element={<ProjectsHome />} />
        <Route path="inspiration" element={<Inspiration />} />
        <Route path="blog" element={<BlogHome />} />
      </Route>
      <Route path="projects" element={<ArticleLayout link="/projects" />}>
        {Projects.map((project, index) => {
          const previousIndex = (index - 1 + Projects.length) % Projects.length;
          const nextIndex = (index + 1) % Projects.length;

          return (
            <Route
              key={project.route}
              path={project.route}
              element={
                <>
                  <Helmet>
                    <title>{project.title}</title>
                  </Helmet>
                  <Project
                    thumbnail={project.thumbnail}
                    title={project.title}
                    client={project.client}
                    blurb={project.blurb}
                    demo={project.demo}
                    about={project.about}
                    techSheet={project.techSheet}
                    resources={project.resources}
                    otherProjects={{
                      previous: Projects[previousIndex].route,
                      next: Projects[nextIndex].route,
                    }}
                  />
                </>
              }
            />
          );
        })}
      </Route>
      <Route path="blog" element={<ArticleLayout link="/blog" />}>
        {BlogPosts.map((post) => (
          <Route
            key={post.route}
            path={post.route}
            element={
              <>
                <Helmet>
                  <title>{post.title}</title>
                </Helmet>
                <Blog
                  title={post.title}
                  date={post.date}
                  thumbnail={post.thumbnail}
                  content={post.content}
                  route={post.route}
                />
              </>
            }
          />
        ))}
      </Route>
    </Route>,
  ),
);

// <Route path="butterfly-effect" element={<ButterflyEffect />} />
// <Route path="ilearn" element={<ILearn />}></Route>
// <Route path="vault" element={<Vault />}></Route>
// <Route path="vodalogic" element={<Vodalogic />}></Route>
