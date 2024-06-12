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
        date: "12 June 2024",
        title: "Chrome plugin",
        description:
            "This project is all about making your own chrome plugin quiz",
        difficulty: "Easy",
        category: "Frontend",
        tags: ["React", "Figma", "Tailwindcss", "Chrome"],
        price: "Free",
        image: "/project-1.png",
        url: "projects/i-like-content/introduction",
    },
    {
        type: "yellow",
        date: "12 June 2024",
        title: "3D Robot Landingpage ",
        description:
            "You will be making the same landing page as on justcode",
        difficulty: "Easy",
        category: "Frontend",
        tags: ["React-Three-Fiber"],
        price: "4.99",
        image: "/project-2.png",
        url: "projects/robot-landing/introduction",
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
