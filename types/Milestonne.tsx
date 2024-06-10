import { TStep } from "./Step";

export type TMilestone = TPureMilestone ;

export enum MilestoneStatus {
  TO_DO = "T",
  FINISHED = "F",
  WORKING = "W",
}

export type TPureMilestone = {
  id: string;
  displayName: string;
  url: string;
  totalSteps: number;
  currentStep: number;
  steps: TStep[];
  status: MilestoneStatus;
  isShowCode: boolean;
};
