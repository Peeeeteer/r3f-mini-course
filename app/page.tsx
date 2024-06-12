import FilterSection from "@/containers/home-page/filter-section";
import HeroSection from "@/containers/home-page/hero-section";
import ProjectsSection from "@/containers/home-page/projects-section";
import clientDB from "@/db/client";
import Image from "next/image";
import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";
import { TProject } from "@/types/Project";
import SubscribeBox from "@/containers/home-page/subscribe-box";

const mockProjects: TProject[] = [
  {
    type: "purple",
    date: "3 May 2024",
    title: "Portfolio website with customized character",
    description:
      "This project is all about making your own little portfolio website where you can highlight some information about yourself",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Figma", "Tailwindcss"],
    price: "4.99$",
    image: "/project-1.png",
  },
  {
    type: "yellow",
    date: "3 May 2024",
    title: "Portfolio website with customized character",
    description:
      "This project is all about making your own little portfolio website where you can highlight some information about yourself",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Figma", "Tailwindcss"],
    price: "Free",
    image: "/project-2.png",
  },
  {
    type: "danger",
    date: "3 May 2024",
    title: "Portfolio website with customized character",
    description:
      "This project is all about making your own little portfolio website where you can highlight some information about yourself",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Figma", "Tailwindcss"],
    price: "4.99$",
    image: "/project-3.png",
  },
];
export default async function Home() {
  const supabase = clientDB();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <HeaderSection user={user} />
      <main className="flex min-h-screen flex-col items-center justify-between p-[66px]">
        <section className="max-w-[994px] w-full mx-auto">
          <HeroSection />
          <FilterSection />
          <ProjectsSection projects={mockProjects} />
          <SubscribeBox></SubscribeBox>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
