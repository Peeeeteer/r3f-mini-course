import {
  MilestoneStatus,
  TMilestone,
  TPureMilestone,
} from "@/types/Milestonne";
import { create } from "zustand";
import { mockProjects } from "./milestone";
import { TProject } from "@/types/Project";

export type MilestoneStore = {
  milestone: TMilestone;
  introduction: string;
  listMilestone: TPureMilestone[];
  // totalMilestoneRemain: number;
  setProjectNameSelected(
    projectName: string,
    currentMilestone: string,
    currentHint: string
  ): void;
  setCurrentHintByStepperName: (stepName: string) => void;
  setMilestoneSelectedByIndex: (milestoneIndex: number) => void;
  toggleReveal: (isReveal: boolean) => void;
  projects: TProject[];
  currentProject: TProject | null;
  projectNameSelected: string | null;
  isReveal: boolean;
};

export const useMilestoneStore = create<MilestoneStore>()((set) => ({
  projects: mockProjects,
  currentProject: null,
  projectNameSelected: null,
  milestone: null,
  introduction: "",
  listMilestone: [],
  isReveal: false,
  setProject: (newProject: TProject) =>
    set((state) => ({ currentProject: newProject })),
  setProjectNameSelected: (
    projectName: string,
    currentMilestone: string,
    currentHint: string = ""
  ) =>
    set((state) => {
      const project = state.projects.find(
        (project) => project.projectName === projectName
      );
      const hint = state?.milestone?.hints?.findIndex(
        (hint) =>
          hint.label.toLocaleLowerCase() === currentHint.toLocaleLowerCase()
      );

      return {
        currentProject: project,
        projectNameSelected: projectName,
        listMilestone: project?.milestones || [],
        milestone: {
          ...project?.milestones[
            Number.isNaN(parseInt(currentMilestone, 10))
              ? 0
              : Math.min(parseInt(currentMilestone, 10) - 1, 0)
          ],
          currentHint: hint,
        },
        isReveal: currentHint === "all",
      };
    }),
  setCurrentHintByStepperName: (stepName: string) =>
    set((state) => {
      const currentHint = state?.milestone?.hints?.findIndex(
        (hint) =>
          hint.label.toLocaleLowerCase() === stepName.toLocaleLowerCase()
      );
      if (currentHint === -1) {
        return state;
      }
      return {
        milestone: {
          ...state.milestone,
          currentHint,
          isReveal: stepName === "all",
        },
      };
    }),
  setMilestoneSelectedByIndex: (milestoneIndex: number) =>
    set((state) => ({ milestone: state.listMilestone[milestoneIndex] })),
  toggleReveal: (isReveal: boolean) =>
    set((state) => ({ isReveal: !!isReveal })),
}));
