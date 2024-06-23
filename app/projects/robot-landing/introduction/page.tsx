import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReReactMarkdown from "@/components/ReReactMarkdown";

export default function Description({
  params,
}: {
  params: { milestone: string };
}) {
  const source = fs.readFileSync(
    path.join(process.cwd(), "database", "robot-landing", "introduction.md"),
    "utf8"
  );
  const { data, content } = matter(source);
  return (
    <main className="flex items-start flex-col pb-[20px] gap-y-5">
      <ReReactMarkdown content={content} />
    </main>
  );
}
