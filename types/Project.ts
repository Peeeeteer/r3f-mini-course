import { TMilestone, TPureMilestone } from "./Milestonne";

export interface TProject {
  type: "purple" | "yellow" | "danger";
  date: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  tags: string[];
  price: string;
  image: string;
  url: string;
  projectName: string;
  milestones: TPureMilestone[];
}
