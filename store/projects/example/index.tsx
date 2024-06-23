import {
  MilestoneDetailLabel,
  MilestoneStatus,
  TPureMilestone,
} from "@/types/Milestonne";
import { TProject } from "@/types/Project";

const listMilestone: TPureMilestone[] = [
  {
    id: "0",
    currentHint: 0,
    description: "Initial setup",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "Introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "Add socks",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "Add shoes",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "Add laces",
      },
      {
        label: MilestoneDetailLabel.hint4,
        markdown: "Add laces",
      },
      {
        label: MilestoneDetailLabel.hint5,
        markdown: "Add laces",
      },
      {
        label: MilestoneDetailLabel.hint6,
        markdown: "Add laces",
      },
    ],
    isReveal: false,
    label: "Milestone 1",
    totalHint: 4,
    url: "/projects/example/1/description",
  },
];
export const ExampleProject: TProject = {
  type: "purple",
  date: "Today",
  title: "Test title project",
  description: "This project an example project",
  difficulty: "Easy",
  category: "Frontend",
  tags: ["React", "Figma", "Tailwindcss", "Chrome"],
  price: "Free",
  image: "/project-1.png",
  url: "projects/example/introduction",
  milestones: listMilestone,
  projectName: "example",
};
