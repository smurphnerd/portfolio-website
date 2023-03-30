import { createRef } from "react";
import {
  RouteProps,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Blog from "./pages/Blog";
import Inspiration from "./pages/Inspiration";
import Landing from "./pages/Landing";
import MainSection from "./pages/MainSection";
import Projects from "./pages/Projects";
import "./styles/styles.scss";

type nodeRefRoutesProps = RouteProps & {
  nodeRef: React.RefObject<HTMLElement | undefined>;
};

export const mainSectionRoutes: nodeRefRoutesProps[] = [
  {
    path: "",
    Component: Landing,
    nodeRef: createRef<HTMLElement | undefined>(),
  },
  {
    path: "projects",
    Component: Projects,
    nodeRef: createRef<HTMLElement | undefined>(),
  },
  {
    path: "inspiration",
    Component: Inspiration,
    nodeRef: createRef<HTMLElement | undefined>(),
  },
  {
    path: "blog",
    Component: Blog,
    nodeRef: createRef<HTMLElement | undefined>(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainSection,
    children: mainSectionRoutes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      Component: route.Component,
    })),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
