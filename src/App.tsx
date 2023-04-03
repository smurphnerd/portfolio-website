import { RouterProvider } from "react-router-dom";
import "./styles/styles.scss";
import { router } from "./routes";

function App() {
  console.log("app");
  return <RouterProvider router={router} />;
}

export default App;
