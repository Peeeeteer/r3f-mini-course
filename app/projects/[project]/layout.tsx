import ProjectPageHeaderSection from "@/containers/projects/components/ProjectPageHeader";
import SidebarProject from "@/containers/projects/components/SidebarProject";

export default async function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <SidebarProject />
      <main className="ml-[250px] min-h-screen">
        <ProjectPageHeaderSection />
        <div className="px-5 pt-8 h-[calc(100dvh-81px)] overflow-y-auto scrollable pb-4">
          {children}
        </div>
      </main>
    </section>
  );
}
