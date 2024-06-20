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
];


const mockProjects: TProject[] = [
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
    projectName: "portfolio-page",
  },
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
    tags: ["React-Three-Fiber"],
    price: "4.99",
    image: "/project-2.png",
    url: "projects/robot-landing/introduction",
    milestones: listMilestone,
    projectName: "robot-landing",
  },
];
export { listMilestone, mockProjects };