import FilterSection from "@/containers/home-page/filter-section";
import HeroSection from "@/containers/home-page/hero-section";
import ProjectsSection from "@/containers/home-page/projects-section";
import clientDB from "@/db/client";
import Image from "next/image";
import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";
import { TProject } from "@/types/Project";
import SubscribeBox from "@/containers/home-page/subscribe-box";
import { mockProjects } from "@/store/milestone";

export default async function Home() {
  const supabase = clientDB();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>

    </>
  );
}
