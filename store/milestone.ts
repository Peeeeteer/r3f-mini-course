import {
  MilestoneDetailLabel,
  MilestoneStatus,
  TMilestone,
  TPureMilestone,
} from "@/types/Milestonne";
import { TProject } from "@/types/Project";

const listMilestone: TPureMilestone[] = [
  {
    id: "0",
    currentHint: 0,
    description: "This is the Milestone 1",
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
    label: "Milestone 1",
    totalHint: 4,
    url: "/projects/portfolio-page-1/1/description",
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
    url: "/projects/portfolio-page-1/2/description",
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
    url: "/projects/portfolio-page-1/3/description",
  },
];

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




const mockProjects: TProject[] = [
  {
    type: "purple",
    date: "12 June 2024",
    title: "Chrome plugin",
    description: "This project is all about making your own chrome plugin quiz",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Figma", "Tailwindcss", "Chrome"],
    price: "Free",
    image: "/project-1.png",
    url: "projects/i-like-content/introduction",
    milestones: listMilestone,
    projectName: "i-like-content",
  },
  {
    type: "yellow",
    date: "12 June 2024",
    title: "3D Robot Landingpage ",
    description: "You will be making the same landing page as on justcode",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Three.js", "Tailwindcss",],
    price: "4.99",
    image: "/project-2.png",
    url: "projects/robot-landing/introduction",
    milestones: robotMilestone,
    projectName: "robot-landing",
  },
  {
    type: "purple",
    date: "12 June 2024",
    title: "Portfolio Page",
    description: "This project is all about making your own portfolio page",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Figma", "Tailwindcss", "Chrome"],
    price: "4.99$",
    image: "/project-1.png",
    url: "projects/portfolio-page-1/introduction",
    milestones: listMilestone,
    projectName: "portfolio-page-1",
  },
];
export { listMilestone, mockProjects };