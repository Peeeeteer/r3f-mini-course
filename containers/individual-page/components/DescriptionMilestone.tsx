import CodeSyntaxHighlighter from "@/components/CodeBlock";
import Link from "next/link";
import { FC } from "react";
const meta = {
  index: "My Homepage",
  contact: "Contact Us",
  about: "About Us",
};
interface DescriptionMilestoneProps {}

const DescriptionMilestone: FC<DescriptionMilestoneProps> = ({}) => {
  return (
    <div>
      <div className="mb-5">
        <h5 className="text-white font-bold text-[28px] leading-8">
          Description
        </h5>
      </div>
      <div className="text-[#E2E8F0] text-[15.88px] leading-7 mb-6">
        <p className="">
          The title and order of a page shown in the sidebar should be
          configured in the
          <code className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[6px] px-[4.4px] mx-1 inline-block text-sm">
            _meta.json
          </code>
          file. file as key-value pairs.
        </p>
        <p>For example, if you have the following file structure:</p>
      </div>
      <div className="pt-[9px] pl-[17px] mb-6">
        <ul>
          <li>
            <span className="text-[#D1D5DB] text-sm leading-[21px] flex items-center gap-x-1 mb-1">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91667 11.5837C2.60725 11.5837 2.3105 11.4607 2.09171 11.2419C1.87292 11.0232 1.75 10.7264 1.75 10.417V4.58366C1.75 4.27424 1.87292 3.97749 2.09171 3.7587C2.3105 3.53991 2.60725 3.41699 2.91667 3.41699H5.25L6.41667 4.58366H8.75C9.05942 4.58366 9.35616 4.70658 9.57496 4.92537C9.79375 5.14416 9.91667 5.44091 9.91667 5.75033V6.33366M2.91667 11.5837H11.0833C11.3928 11.5837 11.6895 11.4607 11.9083 11.2419C12.1271 11.0232 12.25 10.7264 12.25 10.417V7.50033C12.25 7.19091 12.1271 6.89416 11.9083 6.67537C11.6895 6.45658 11.3928 6.33366 11.0833 6.33366H5.25C4.94058 6.33366 4.64383 6.45658 4.42504 6.67537C4.20625 6.89416 4.08333 7.19091 4.08333 7.50033V10.417C4.08333 10.7264 3.96042 11.0232 3.74162 11.2419C3.52283 11.4607 3.22609 11.5837 2.91667 11.5837Z"
                  stroke="#D1D5DB"
                  strokeWidth="1.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>pages</span>
            </span>
            <ul className="pl-[23px]">
              <ul>
                <li>
                  <span className="text-[#D1D5DB] text-sm leading-[21px] py-1 flex gap-x-1 items-center">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25033 7.5H8.75033M5.25033 9.83333H8.75033M9.91699 12.75H4.08366C3.77424 12.75 3.47749 12.6271 3.2587 12.4083C3.03991 12.1895 2.91699 11.8928 2.91699 11.5833V3.41667C2.91699 3.10725 3.03991 2.8105 3.2587 2.59171C3.47749 2.37292 3.77424 2.25 4.08366 2.25H7.34216C7.49686 2.25003 7.6452 2.31151 7.75458 2.42092L10.9127 5.57908C11.0221 5.68845 11.0836 5.8368 11.0837 5.9915V11.5833C11.0837 11.8928 10.9607 12.1895 10.7419 12.4083C10.5232 12.6271 10.2264 12.75 9.91699 12.75Z"
                        stroke="#D1D5DB"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>_meta.json</span>
                  </span>
                </li>
                <li>
                  <span className="text-[#D1D5DB] text-sm leading-[21px] py-1 flex gap-x-1 items-center">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25033 7.5H8.75033M5.25033 9.83333H8.75033M9.91699 12.75H4.08366C3.77424 12.75 3.47749 12.6271 3.2587 12.4083C3.03991 12.1895 2.91699 11.8928 2.91699 11.5833V3.41667C2.91699 3.10725 3.03991 2.8105 3.2587 2.59171C3.47749 2.37292 3.77424 2.25 4.08366 2.25H7.34216C7.49686 2.25003 7.6452 2.31151 7.75458 2.42092L10.9127 5.57908C11.0221 5.68845 11.0836 5.8368 11.0837 5.9915V11.5833C11.0837 11.8928 10.9607 12.1895 10.7419 12.4083C10.5232 12.6271 10.2264 12.75 9.91699 12.75Z"
                        stroke="#D1D5DB"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>about.mdx</span>
                  </span>
                </li>
                <li>
                  <span className="text-[#D1D5DB] text-sm leading-[21px] py-1 flex gap-x-1 items-center">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25033 7.5H8.75033M5.25033 9.83333H8.75033M9.91699 12.75H4.08366C3.77424 12.75 3.47749 12.6271 3.2587 12.4083C3.03991 12.1895 2.91699 11.8928 2.91699 11.5833V3.41667C2.91699 3.10725 3.03991 2.8105 3.2587 2.59171C3.47749 2.37292 3.77424 2.25 4.08366 2.25H7.34216C7.49686 2.25003 7.6452 2.31151 7.75458 2.42092L10.9127 5.57908C11.0221 5.68845 11.0836 5.8368 11.0837 5.9915V11.5833C11.0837 11.8928 10.9607 12.1895 10.7419 12.4083C10.5232 12.6271 10.2264 12.75 9.91699 12.75Z"
                        stroke="#D1D5DB"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>contact.mdx</span>
                  </span>
                </li>
                <li>
                  <span className="text-[#D1D5DB] text-sm leading-[21px] py-1 flex gap-x-1 items-center">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25033 7.5H8.75033M5.25033 9.83333H8.75033M9.91699 12.75H4.08366C3.77424 12.75 3.47749 12.6271 3.2587 12.4083C3.03991 12.1895 2.91699 11.8928 2.91699 11.5833V3.41667C2.91699 3.10725 3.03991 2.8105 3.2587 2.59171C3.47749 2.37292 3.77424 2.25 4.08366 2.25H7.34216C7.49686 2.25003 7.6452 2.31151 7.75458 2.42092L10.9127 5.57908C11.0221 5.68845 11.0836 5.8368 11.0837 5.9915V11.5833C11.0837 11.8928 10.9607 12.1895 10.7419 12.4083C10.5232 12.6271 10.2264 12.75 9.91699 12.75Z"
                        stroke="#D1D5DB"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>index.mdx</span>
                  </span>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <p className="text-[#E2E8F0] ">
          You can define how the pages are shown in the sidebar via the 
          <code className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[6px] px-[4.4px] mx-1 inline-block text-sm">
            _meta.json
          </code>
          file:
        </p>
      </div>
      <div className="w-full mb-6">
        <CodeSyntaxHighlighter
          code={String(JSON.stringify(meta, null, 2))}
          language="json"
        ></CodeSyntaxHighlighter>
      </div>
      <div>
        <div className="border border-[#FB923C4D] bg-[#FB923C33] rounded-lg">
          <div className="py-[9px] px-3">
            <div className="flex items-start gap-x-2">
              <div className="flex-1 text-[10px] leading-[30px]">💡</div>
              <p className="text-[#FDBA74] text-[15.75px] leading-7">
                If any routes are not listed in the
                <code className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[6px] px-[4.4px] mx-1 inline-block text-sm text-[#FDBA74]">
                  _meta.json
                </code>
                file, they will be appended to the end of the sidebar and sorted
                alphabetically, and the title will be formatted with
                <Link className="text-[#008AE6] underline" href={""}>
                  Title.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionMilestone;
