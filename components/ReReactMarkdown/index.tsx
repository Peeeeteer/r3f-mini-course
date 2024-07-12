import CustomImage from "@/components/CustomImage";
import { Heading } from "@/components/MarkdownElement/Heading";
import { Para } from "@/components/MarkdownElement/Para";
import ReactMarkdown from "react-markdown";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkToc from "remark-toc";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { Table } from "../MarkdownElement/Table";
import { twMerge } from "tailwind-merge";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
export interface ReReactMarkdownProps {
  content: string;
}

const customStyle = {
  fontSize: '16px',
  ...vscDarkPlus,
};
const ReReactMarkdown = (props: ReReactMarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[
        [remarkParse],
        [remarkToc],
        [remarkGfm],
        [remarkRehype],
        [rehypeStringify],
      ]}
      rehypePlugins={[
        [rehypeSlug],
        [rehypeAutolinkHeadings],
        [rehypeRaw, rehypeSanitize],
      ]}
      components={{
        p: Para.P as any,
        span: Para.Span as any,
        ul: Para.Ul as any,
        li: Para.Li as any,
        image: ({ src, alt, ...props }: any) => {
          return <CustomImage src={src} alt={alt} {...props} />;
        },
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={customStyle as any}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <span
              className={twMerge(
                className,
                "bg-neutral-600",
                "text-white",
                "rounded-md px-1 py-[2px]"
              )}
              {...props}
            >
              {children}
            </span>
          );
        },
        h1: Heading.H1 as any,
        h2: Heading.H2 as any,
        h3: Heading.H3 as any,
        h4: Heading.H4 as any,
        h5: Heading.H5 as any,
        h6: Heading.H6 as any,
        table: Table.Table as any,
        tbody: Table.Tbody as any,
        thead: Table.Thead as any,
        tr: Table.Tr as any,
        th: Table.Th as any,
        td: Table.Td as any,
      }}
    >{props?.content}</ReactMarkdown>
  );
};

export default ReReactMarkdown;
