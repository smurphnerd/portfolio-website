import { createContext } from "react";
import Landing from "../pages/Landing";

interface NavigationContextType {
  activePage: JSX.Element | null;
  setActivePage: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
}

const defaultNavigationContext: NavigationContextType = {
  activePage: null,
  setActivePage: () => {},
};

const NavigationContext = createContext(defaultNavigationContext);

export default NavigationContext;
