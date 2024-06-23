import {
  MilestoneDetailLabel,
  MilestoneStatus,
  TPureMilestone,
} from "@/types/Milestonne";
import { TProject } from "@/types/Project";

const robotMilestone: TPureMilestone[] = [
  {
    id: "0",
    currentHint: 0,
    description: "This is the Milestone 1",
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
    ],
    isReveal: false,
    label: "Milestone 1",
    totalHint: 4,
    url: "/projects/robot-landing/1/description",
  },
  {
    id: "1",
    currentHint: 0,
    description: "This is the Milestone 2",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "Milestone 2",
    totalHint: 4,
    url: "/projects/robot-landing/2/description",
  },

  {
    id: "1",
    currentHint: 0,
    description: "This is the Milestone 2",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "Milestone 3",
    totalHint: 4,
    url: "/projects/robot-landing/3/description",
  },
];

export const RobotLandingPageProject: TProject = {
  type: "yellow",
  date: "12 June 2024",
  title: "3D Robot Landingpage ",
  description: "You will be making the same landing page as on justcode",
  difficulty: "Easy",
  category: "Frontend",
  tags: ["React", "Three.js", "Tailwindcss"],
  price: "4.99",
  image: "/project-2.png",
  url: "projects/robot-landing/introduction",
  milestones: robotMilestone,
  projectName: "robot-landing",
};
