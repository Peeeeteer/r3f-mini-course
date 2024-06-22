import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/legacy/image";
// syntax-highlighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Para } from "@/components/MarkdownElement/Para";
import CustomImage from "@/components/CustomImage";
import { Heading } from "@/components/MarkdownElement/Heading";
import remarkToc from "remark-toc";

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
      <ReactMarkdown
        children={content}
        remarkPlugins={[[remarkToc]]}
        components={{
          p: Para.P,
          span: Para.Span,
          ul: Para.Ul,
          li: Para.Li,
          image: ({ src, alt, ...props }: any) => {
            return <CustomImage src={src} alt={alt} {...props} />;
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <span className={className} {...props}>
                {children}
              </span>
            );
          },
          h1: Heading.H1,
          h2: Heading.H2,
          h3: Heading.H3,
          h4: Heading.H4,
          h5: Heading.H5,
          h6: Heading.H6,
        }}
      ></ReactMarkdown>
    </main>
  );
}
