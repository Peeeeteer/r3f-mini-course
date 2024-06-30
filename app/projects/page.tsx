import HeroSection from "@/containers/home-page/hero-section";
import clientDB from "@/db/client";
import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";
import FilterSection from "@/containers/home-page/filter-section";
import ProjectsSection from "@/containers/home-page/projects-section";
import { mockProjects } from "@/store/milestone";
import SubscribeBox from "@/containers/home-page/subscribe-box";

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
