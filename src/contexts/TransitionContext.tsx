import { createContext } from "react";

interface TransitionContextType {
  isTransitioning: Boolean;
  setIsTransitioning: React.Dispatch<React.SetStateAction<Boolean>>;
}

const defaultTransitionContext: TransitionContextType = {
  isTransitioning: false,
  setIsTransitioning: () => {},
};

const TransitionContext = createContext(defaultTransitionContext);

export default TransitionContext;
