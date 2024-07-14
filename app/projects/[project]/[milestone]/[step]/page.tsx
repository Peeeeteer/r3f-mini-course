import fs from "fs";
import matter from "gray-matter";
import path from "path";
// syntax-highlighter
import ReReactMarkdown from "@/components/ReReactMarkdown";
import { useState } from "react";

export default function Page(
  {
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
