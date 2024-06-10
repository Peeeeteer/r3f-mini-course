import IndividualHeaderSection from "@/containers/individual-page/components/IndividualHeader";
import FooterProcess from "../../containers/individual-page/components/FooterProcess";
import Sidebar from "@/containers/individual-page/sidebar";

export default async function IndividualLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Sidebar />
      <main className="ml-[250px] min-h-screen">
        <IndividualHeaderSection user={null} />
        <div className="px-5 pt-8 h-[calc(100dvh-130px)]">{children}</div>
        <FooterProcess />
      </main>
    </section>
  );
}
