"use client";
import FooterProcess from "@/containers/projects/components/FooterProcess";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function IntroductionLayout({
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

  return <section>
    {children}
    <FooterProcess />
    </section>;
}
