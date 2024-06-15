"use client";

import ProjectPageHeader from "@/containers/projects/components/ProjectPageHeader";
import Sidebar from "@/containers/projects/components/Sidebar";
import { useParams, usePathname } from "next/navigation";
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
  const { setProjectNameSelected } = useMilestoneStore();
  useEffect(() => {
    if (params.startsWith("/projects")) {
      const urlSplit = params.split("/");
      const project = urlSplit[2];
      setProjectNameSelected(project);
    }
  }, [params, setProjectNameSelected]);

  return (
    <section>
      <SidebarProject />
      <main className="ml-[250px] min-h-screen">
        <ProjectPageHeader user={null} />
        <div className="px-5 pt-8 h-[calc(100dvh-130px)]">{children}</div>
        <FooterProcess />
      </main>
    </section>
  );
}
