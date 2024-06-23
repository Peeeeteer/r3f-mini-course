"use client";

import ProjectPageHeader from "@/containers/projects/components/ProjectPageHeader";
import Sidebar from "@/containers/projects/components/Sidebar";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import FooterProcess from "@/containers/projects/components/FooterProcess";
import SidebarProject from "@/containers/projects/components/SidebarProject";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = usePathname();
  const { step, milestone } = useParams<{ milestone: string; step: string }>();

  const { setProjectNameSelected, setCurrentHintByStepperName } =
    useMilestoneStore();

  useEffect(() => {
    if (params.startsWith("/projects")) {
      const urlSplit = params.split("/");
      if (urlSplit.length < 3) return;
      const project = urlSplit[2];
      setProjectNameSelected(project);
    }
  }, [params]);

  useEffect(() => {
    if (step) {
      setCurrentHintByStepperName(step);
    }
  }, [step]);

  return (
    <section>
      <SidebarProject />
      <main className="ml-[250px] min-h-screen">
        <ProjectPageHeader user={null} />
        <div className="px-5 pt-8 h-[calc(100dvh-200px)] overflow-y-auto">
          {children}
        </div>
        <FooterProcess />
      </main>
    </section>
  );
}
