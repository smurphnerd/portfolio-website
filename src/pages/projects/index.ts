import { Icon } from "../../assets/icons";
import ButterflyEffect from "./ButterflyEffect";
import DLKaggle from "./DLKaggle";
import ILearn from "./ILearn";
import Vault from "./Vault";
import Vodalogic from "./Vodalogic";
import WhyLeaveTown from "./WhyLeaveTown";

export type Project = {
  thumbnail: string;
  title: string;
  client: string;
  blurb: string;
  route: string;
  demo?: string;
  about?: JSX.Element;
  techSheet?: string[];
  resources?: JSX.Element[];
  languages?: Icon[];
  date: string;
  markdownPath?: string;
};

export const Projects: Project[] = [
  DLKaggle,
  WhyLeaveTown,
  Vodalogic,
  Vault,
  ILearn,
  ButterflyEffect,
];
