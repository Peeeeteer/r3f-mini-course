import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
// syntax-highlighter
import CustomImage from "@/components/CustomImage";
import { Heading } from "@/components/MarkdownElement/Heading";
import { Para } from "@/components/MarkdownElement/Para";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkToc from "remark-toc";

export default function Page({
  params,
  searchParams,
}: {
  params: { milestone: string; step: string };
  searchParams: {
    step: string;
  };
}) {
  if (!params.milestone || !params.step) {
    return null;
  }

  if (params.step === "all") {
    const files = fs
      .readdirSync(
        path.join(
          process.cwd(),
          "database",
          "portfolio-page-1",
          params.milestone
        )
      )
      .filter((file) => file.startsWith("hint") && file.endsWith(".md"));

    const contents = files.map((file) => {
      const fullPath = path.join(
        process.cwd(),
        "database",
        "portfolio-page-1",
        params.milestone,
        file
      );
      const source = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(source);
      return content;
    });
    return (
      <>
        {" "}
        <main className="flex items-start flex-col pb-[20px] gap-y-4">
          <ReactMarkdown
            remarkPlugins={[remarkToc]}
            skipHtml={false}
            children={contents.join("\n")}
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
      </>
    );
  }

  const source = fs.readFileSync(
    path.join(
      process.cwd(),
      "database",
      "portfolio-page-1",
      params.milestone,
      params.step + ".md"
    ),
    "utf8"
  );
  const { data, content } = matter(source);

  return (
    <main className="flex items-start flex-col pb-[20px] gap-y-4">
      <ReactMarkdown
        remarkPlugins={[remarkToc]}
        skipHtml={false}
        children={content}
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
