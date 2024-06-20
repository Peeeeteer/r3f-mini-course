import { TStep } from "./Step";

export type TMilestone = TPureMilestone | null;

export enum MilestoneDetail  {
  description = "description",
  hint1 = "hint1",
  hint2 = "hint2",
  hint3 = "hint3",
}
export enum MilestoneDetailLabel  {
  description = "Description",
  hint1 = "Hint1",
  hint2 = "Hint2",
  hint3 = "Hint3",
}

export enum MilestoneStatus {
  TO_DO = "T",
  FINISHED = "F",
  WORKING = "W",
}

export type Hint = {
  label: MilestoneDetailLabel;
  markdown: string;
};

export type TPureMilestone = {
  id: string;
  label: string;
  url: string;
  description: string;
  totalHint: number;
  currentHint: number;
  hints: Hint[];
  status: MilestoneStatus;
  isReveal: boolean;
};
