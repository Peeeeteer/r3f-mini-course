import CodeSyntaxHighlighter from "@/components/CodeBlock";
import Stepper from "@/components/Stepper";
import Link from "next/link";
import ArrowLeftSvg from "../../components/Icons/ArrowLeftSvg";
import ArrowRightSvg from "../../components/Icons/ArrowRightSvg";

const meta = {
  index: "My Homepage",
  contact: "Contact Us",
  about: "About Us",
};

export default function Home() {
  return (
    <div>
      <main className="flex items-start flex-col pb-[77px]">
        <div className="mb-6">
          <Stepper
            activeStep={0}
            steps={["Descriptions", "Hint 1", "Hint 2", "Hint 3"]}
          ></Stepper>
        </div>
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
                  file, they will be appended to the end of the sidebar and
                  sorted alphabetically, and the title will be formatted with
                  <Link className="text-[#008AE6] underline" href={""}>
                    Title.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full bg-[#FFFFFF1A] h-[2px] relative mb-10">
        <div className="absolute h-[2px] left-0 top-0 w-1/3 bg-[#5533FF]"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-fit bg-[#FFFFFF14] px-[10px] py-2 rounded-md border border-[#FFFFFF0F] flex gap-x-1 items-center">
          <p className="text-white text-sm">Reveal the final code</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.12"
              d="M8.66675 2L9.82287 5.00591C10.0109 5.49473 10.1049 5.73914 10.2511 5.94472C10.3806 6.12693 10.5398 6.28613 10.722 6.41569C10.9276 6.56187 11.172 6.65587 11.6608 6.84388L14.6667 8L11.6608 9.15612C11.172 9.34413 10.9276 9.43813 10.722 9.58431C10.5398 9.71387 10.3806 9.87307 10.2511 10.0553C10.1049 10.2609 10.0109 10.5053 9.82287 10.9941L8.66675 14L7.51063 10.9941C7.32262 10.5053 7.22862 10.2609 7.08244 10.0553C6.95287 9.87307 6.79368 9.71387 6.61147 9.58431C6.40589 9.43813 6.16148 9.34413 5.67266 9.15612L2.66675 8L5.67265 6.84388C6.16148 6.65587 6.40589 6.56187 6.61147 6.41569C6.79368 6.28613 6.95287 6.12693 7.08243 5.94472C7.22862 5.73914 7.32262 5.49473 7.51063 5.00591L8.66675 2Z"
              fill="black"
            />
            <path
              d="M2.99992 14.6663V11.333M2.99992 4.66634V1.33301M1.33325 2.99967H4.66659M1.33325 12.9997H4.66659M8.66658 1.99967L7.51047 5.00558C7.32246 5.4944 7.22845 5.73881 7.08227 5.9444C6.95271 6.12661 6.79352 6.2858 6.61131 6.41536C6.40572 6.56154 6.16131 6.65555 5.67249 6.84356L2.66659 7.99967L5.67249 9.15579C6.16131 9.3438 6.40572 9.4378 6.61131 9.58399C6.79352 9.71355 6.95271 9.87274 7.08227 10.0549C7.22845 10.2605 7.32246 10.5049 7.51047 10.9938L8.66659 13.9997L9.8227 10.9938C10.0107 10.5049 10.1047 10.2605 10.2509 10.055C10.3805 9.87274 10.5397 9.71355 10.7219 9.58399C10.9274 9.4378 11.1719 9.3438 11.6607 9.15579L14.6666 7.99967L11.6607 6.84356C11.1719 6.65555 10.9274 6.56154 10.7219 6.41536C10.5397 6.2858 10.3805 6.12661 10.2509 5.9444C10.1047 5.73881 10.0107 5.4944 9.8227 5.00558L8.66658 1.99967Z"
              stroke="#635AFF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex gap-x-4">
          <div className="flex gap-x-2 px-3 py-2 items-center w-fit">
            <ArrowLeftSvg color="#FFFFFF33" strokeWidth={"1.2"}></ArrowLeftSvg>
            <span className="text-[#FFFFFF33] text-sm">Back</span>
          </div>
          <div className="">
            <button className="flex items-center gap-x-2 bg-[#635AFF] rounded-md px-3 py-[6px] w-fit">
              <span className="text-white text-sm font-bold block">
                Reveal Hint 1
              </span>
              <ArrowRightSvg
                color="#FFFFFF"
                strokeWidth={"1.5"}
              ></ArrowRightSvg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
