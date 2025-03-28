import { TProject } from "@/types/Project";
import { ChromePluginProject } from "./projects/chorme-plugin";
// import { ExampleProject } from "./projects/example";
import { ProfilePageProject } from "./projects/portfolio-page";
import { RobotLandingPageProject } from "./projects/robot-landingpage";

const mockProjects: TProject[] = [
  // ChromePluginProject, // Hiding Chrome plugin for now
  RobotLandingPageProject,
  // ProfilePageProject,
  // ExampleProject,
];
export { mockProjects };

