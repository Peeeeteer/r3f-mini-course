"use client";

import ProjectPageHeader from "@/containers/projects/components/ProjectPageHeader";
import SidebarProject from "@/containers/projects/components/SidebarProject";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { step, milestone, project } = useParams<{
    milestone: string;
    step: string;
    project: string;
  }>();

  const { projectNameSelected, setProjectNameSelected } = useMilestoneStore();

  useEffect(() => {
    setProjectNameSelected(project || "", milestone, step);
  }, [step, milestone, projectNameSelected]);

  return (
    <section>
      <SidebarProject />
      <main className="ml-[250px] min-h-screen">
        <ProjectPageHeader user={null} />
        <div className="px-5 pt-8 h-[calc(100dvh-81px)] overflow-y-auto scrollable pb-4">
          {children}
        </div>
      </main>
    </section>
  );
}
