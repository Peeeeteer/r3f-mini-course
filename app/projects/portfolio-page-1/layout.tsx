"use client";

import ProjectPageHeader from "@/containers/projects/components/ProjectPageHeader";
import FooterProcess from "../../../containers/projects/components/FooterProcess";
import Sidebar from "@/containers/projects/components/Sidebar";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMilestoneStore } from "@/store/useMilestoneStore";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const params = usePathname();
  // const { setProjectNameSelected } = useMilestoneStore();
  // useEffect(() => {
  //   if (params.startsWith("/projects")) {
  //     const urlSplit = params.split("/");
  //     const project = urlSplit[2];
  //     setProjectNameSelected(project);
  //   }
  // }, [params, setProjectNameSelected]);

  return <section>{children}</section>;
}
