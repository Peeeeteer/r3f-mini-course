import {
  MilestoneStatus,
  TMilestone,
  TPureMilestone,
} from "@/types/Milestonne";
import { create } from "zustand";
import { listMilestone, mockProjects } from "./milestone";
import { TProject } from "@/types/Project";

export type MilestoneStore = {
  milestone: TMilestone;
  introduction: string;
  listMilestone: TPureMilestone[];
  setMilestoneSelected: (milestone: TPureMilestone) => void;
  setMilestoneSelectedByIndex: (milestoneIndex: number) => void;
  totalMilestoneRemain: number;
  nextStepMilestone: () => void;
  prevStepMilestone: () => void;
  setShowCode: (isShowCode: boolean) => void;
  setProjectNameSelected(projectName: string): void;
  projects: TProject[];
  currentProject: TProject | null;
  projectNameSelected: string | null;
};

export const useMilestoneStore = create<MilestoneStore>()((set) => ({
  projects: mockProjects,
  currentProject: null,
  projectNameSelected: null,
  milestone: null,
  introduction: "",
  listMilestone: [],
  totalMilestoneRemain: listMilestone.filter(
    (milestone) => milestone && milestone.status !== "F"
  ).length,
  setMilestoneSelected: (milestone: TPureMilestone) =>
    set((state) => ({ milestone })),
  setMilestoneSelectedByIndex: (milestoneIndex: number) =>
    set((state) => ({ milestone: state.listMilestone[milestoneIndex] })),
  nextStepMilestone: () =>
    set((state) => {
      if (
        !state.milestone ||
        state.milestone.status === MilestoneStatus.FINISHED
      )
        return state;
      if (state.milestone.currentHint === state.milestone.totalHint - 1)
        return state;
      return {
        milestone: {
          ...state.milestone,
          currentHint: state.milestone.currentHint + 1,
        },
      };
    }),
  prevStepMilestone: () =>
    set((state) => {
      if (
        !state.milestone ||
        state.milestone.status === MilestoneStatus.FINISHED
      )
        return state;
      if (state.milestone.currentHint === 0) return state;
      return {
        milestone: {
          ...state.milestone,
          currentHint: state.milestone.currentHint - 1,
        },
      };
    }),
  setShowCode: (isReveal: boolean) =>
    set((state) => ({
      milestone: { ...(state?.milestone || ({} as any)), isReveal },
    })),
  setProject: (newProject: TProject) =>
    set((state) => ({ currentProject: newProject })),
  setProjectNameSelected: (projectName: string) =>
    set((state) => {
      const project = state.projects.find(
        (project) => project.projectName === projectName
      );
      return {
        currentProject: project,
        projectNameSelected: projectName,
        listMilestone: project?.milestones || [],
        milestone: project?.milestones[0],
      };
    }),
}));
