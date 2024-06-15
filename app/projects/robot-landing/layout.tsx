// "use client";

// import ProjectPageHeader from "@/containers/projects/components/ProjectPageHeader";
// import FooterProcess from "../../../containers/projects/components/FooterProcess";
// import Sidebar from "@/containers/projects/components/Sidebar";
// import { useParams, usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useMilestoneStore } from "@/store/useMilestoneStore";

// export default function ProjectLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <section>
//       <Sidebar />
//       <main className="ml-[250px] min-h-screen">
//         <ProjectPageHeader user={null} />
//         <div className="px-5 pt-8 h-[calc(100dvh-130px)]">{children}</div>
//         <FooterProcess />
//       </main>
//     </section>
//   );
// }
