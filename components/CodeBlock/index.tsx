import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeSyntaxHighlighter: FC<CodeBlockProps> = ({
  language = "javascript",
  code = "",
}) => {
  return (
    <div className="w-full">
      <div className="bg-[#364651] text-[#E5E7EB] text-sm leading-[18px] rounded-tl-xl rounded-tr-xl px-4 py-2">
        <p>_meta.json</p>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        showLineNumbers
        wrapLines
        customStyle={{
          background: "#2d373d",
          borderRadius: "0px 0px 12px 12px",
        }}
      >
        {code}
      </SyntaxHighlighter>

    </div>
  );
};

export default CodeSyntaxHighlighter;
