import HeroSection from "@/containers/home-page/hero-section";
import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";
import FilterSection from "@/containers/home-page/filter-section";
import ProjectsSection from "@/containers/home-page/projects-section";
import { mockProjects } from "@/store/milestone";
import SubscribeBox from "@/containers/home-page/subscribe-box";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default async function Home() {
    return (
        <>
            <HeaderSection />
            <Suspense fallback={<Loading />}></Suspense>
            <main className="flex min-h-screen flex-col items-center justify-between p-[66px]">
                <section className="max-w-[994px] w-full mx-auto">
                    <h1>Hello</h1>
                </section>
            </main>
            <FooterSection />
        </>
    );
}
