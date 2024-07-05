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
    description: "Project setup",
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
    label: "1. Setup",
    totalHint: 4,
    url: "/projects/robot-landing/1/description",
  },
  {
    id: "1",
    currentHint: 0,
    description: "Adding a cube",
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
    label: "2. Cube",
    totalHint: 4,
    url: "/projects/robot-landing/2/description",
  },

  {
    id: "2",
    currentHint: 0,
    description: "Lets make a simple version of our goal",
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
    label: "3. Simple version",
    totalHint: 4,
    url: "/projects/robot-landing/3/description",
  },

  {
    id: "3",
    currentHint: 0,
    description: "Lets add the robot",
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
    label: "4. Robot Time",
    totalHint: 4,
    url: "/projects/robot-landing/4/description",
  },

  {
    id: "4",
    currentHint: 0,
    description: "Lets add the robot",
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
    label: "5. Lights",
    totalHint: 4,
    url: "/projects/robot-landing/5/description",
  },



];

export const RobotLandingPageProject: TProject = {
  type: "yellow",
  date: "26 June 2024",
  title: "3D Robot Landingpage ",
  description: "You will be making the same landing page as on justcode",
  difficulty: "Easy",
  category: "Frontend",
  tags: ["React", "Three.js", "Tailwindcss"],
  // price: "4.99",
  image: "/project-2.png",
  url: "projects/robot-landing/introduction",
  milestones: robotMilestone,
  projectName: "robot-landing",
};
