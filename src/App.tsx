import { RouterProvider } from "react-router-dom";
import "./styles/styles.scss";
import { router } from "./routes";
import { useEffect } from "react";
import * as icons from "./assets/icons";
import * as thumbnails from "./assets/thumbnails";
import clouds from "./assets/clouds.png";
import twinking from "./assets/twinkling.png";
import stars from "./assets/stars.png";
import smBackground from "./assets/sm-background.png";
import smLogo from "./assets/sm-logo.svg";

function App() {
  type ImagePromise = Promise<Event>;

  // Creates a new promise that resolves on image onload
  const loadImage = (src: string): ImagePromise => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.src = src;
    });
  };

  const loadAssets = async (): Promise<void> => {
    const promises: ImagePromise[] = [
      ...Object.values(icons).map(loadImage),
      ...Object.values(thumbnails).map(loadImage),
      loadImage(clouds),
      loadImage(twinking),
      loadImage(stars),
      loadImage(smBackground),
      loadImage(smLogo),
    ];
    await Promise.all(promises);
  };

  useEffect(() => {
    loadAssets();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
