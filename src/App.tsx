import { RouterProvider } from "react-router-dom";
import "./styles/styles.scss";
import { router } from "./routes";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

function App() {
  // const [isLoading, setisLoading] = useState(true);
  // console.log(isLoading);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisLoading(false);
  //   }, 1000);
  // }, []);

  return <RouterProvider router={router} />;
}

export default App;
