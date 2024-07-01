import ProjectPageHeaderSection from "@/containers/projects/components/ProjectPageHeader";
import SidebarProject from "@/containers/projects/components/SidebarProject";
import clientDB from "@/db/client";

export default async function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = clientDB();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section>
      <SidebarProject />
      <main className="ml-[250px] min-h-screen">
        <ProjectPageHeaderSection user={user}/>
        <div className="px-5 pt-8 h-[calc(100dvh-81px)] overflow-y-auto scrollable pb-4">
          {children}
        </div>
      </main>
    </section>
  );
}
