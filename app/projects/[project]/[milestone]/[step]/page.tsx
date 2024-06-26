import fs from "fs";
import matter from "gray-matter";
import path from "path";
// syntax-highlighter
import ReReactMarkdown from "@/components/ReReactMarkdown";

export default function Page({
  params,
  searchParams,
}: {
  params: { milestone: string; step: string; project: string };
  searchParams: {
    step: string;
  };
}) {
  if (!params.milestone || !params.step) {
    return null;
  }
  const pathToCheck = path.join(
    process.cwd(),
    "database",
    params.project,
    params.milestone,
    params.step + ".md"
  );

  if (params.step === "all") {
    const files = fs
      .readdirSync(
        path.join(
          process.cwd(),
          "database",
          params.project,
          params.milestone
        )
      )
      .filter((file) => file.startsWith("hint") && file.endsWith(".md"));

    const contents = files.map((file) => {
      const fullPath = path.join(
        process.cwd(),
        "database",
        params.project,
        params.milestone,
        file
      );
      const source = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(source);
      return content;
    });
    return (
      <>
        <main className="flex items-start flex-col pb-[20px] gap-y-4">
          <ReReactMarkdown content={contents.join("\n")} />
        </main>
      </>
    );
  }

  if (!fs.existsSync(pathToCheck)) {
    return (
      <main className="flex items-start flex-col pb-[20px] gap-y-4">
        <h1 className="text-white">Something went wrong... contact support</h1>
      </main>
    );
  }
  const source = fs.readFileSync(pathToCheck, "utf8");
  const { data, content } = matter(source);

  return (
    <main className="flex items-start flex-col pb-[20px] gap-y-4">
      <ReReactMarkdown content={content} />
    </main>
  );
}
