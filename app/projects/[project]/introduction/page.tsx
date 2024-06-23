import ReReactMarkdown from "@/components/ReReactMarkdown";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function Page({
  params,
}: {
  params: { milestone: string, project: string};
}) {
  const source = fs.readFileSync(
    path.join(process.cwd(), "database", params.project, "introduction.md"),
    "utf8"
  );
  const { data, content } = matter(source);
  return (
    <main className="flex items-start flex-col pb-[20px] gap-y-5">
      <ReReactMarkdown content={content} />
    </main>
  );
}
