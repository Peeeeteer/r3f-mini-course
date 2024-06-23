import {
  MilestoneDetailLabel,
  MilestoneStatus,
  TMilestone,
  TPureMilestone,
} from "@/types/Milestonne";
import { TProject } from "@/types/Project";
import { ProfilePageProject } from "./projects/portfolio-page";
import { ChromePluginProject } from "./projects/chorme-plugin";
import { RobotLandingPageProject } from "./projects/robot-landingpage";

const mockProjects: TProject[] = [
  RobotLandingPageProject,
  ChromePluginProject,
  ProfilePageProject,
];
export { mockProjects };
