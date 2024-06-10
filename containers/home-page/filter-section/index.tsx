"use client";

import { FC, useState } from "react";
import { ReSelect } from "@/components/ReSelect";
import { TOptionSelect } from "@/types/OptionSelect";
import { components } from "react-select";
import ClockSvg from "@/components/Icons/ClockSvg";
import BarChartSvg from "@/components/Icons/BarChartSvg";
import CodeBrowserSvg from "@/components/Icons/CodeBrowserSvg";
import CurrencyDollarCircleSvg from "@/components/Icons/CurrencyDollarCircleSvg";
import { twMerge } from "tailwind-merge";
import SearchLgSvg from "@/components/Icons/SearchLgSvg";

const TimeOptions: TOptionSelect[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
];
const DifficultyOptions: TOptionSelect[] = [
  { value: "easy", label: "Easy" },
  { value: "hard", label: "Hard" },
];
const CategoryOptions: TOptionSelect[] = [
  { value: "font-end", label: "Frontend" },
  { value: "back-end", label: "Backend" },
];
const PaymentType: TOptionSelect[] = [
  { value: "paid", label: "Paid" },
  { value: "free", label: "Free" },
];

const tags = ["React", "Tailwindcss", "Ipsum", "Figma", "Color"];

interface FilterSectionProps {}

const FilterSection: FC<FilterSectionProps> = ({}) => {
  const [tagSelected, setTagSelected] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [timeSelected, setTimeSelected] = useState<TOptionSelect>(
    TimeOptions[0]
  );
  const [difficultySelected, setDifficultySelected] = useState<TOptionSelect>(
    DifficultyOptions[0]
  );
  const [categorySelected, setCategorySelected] = useState<TOptionSelect>(
    CategoryOptions[0]
  );
  const [paymentTypeSelected, setPaymentTypeSelected] = useState<TOptionSelect>(
    PaymentType[0]
  );

  return (
    <section>
      <div className="mt-[140px]">
        <div className="flex justify-between">
          <div className="w-full max-w-[222px]">
            <div className="relative flex w-full">
              <input
                type="text"
                className="border border-[#FFFFFF0F] bg-[#FFFFFF14] rounded-md px-3 py-[6px] text-white w-full"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchLgSvg
                fillOpacity={0.32}
                fill="white"
                className="absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="w-[136px]">
              <ReSelect
                value={timeSelected}
                options={TimeOptions}
                onChange={(value: any) => setTimeSelected(value)}
                label=""
                SingleValue={({ children, ...props }: any) => (
                  <components.SingleValue {...props}>
                    <div
                      className="flex items-center"
                      style={{
                        columnGap: "8px",
                      }}
                    >
                      <ClockSvg strokeOpacity={0.2} />
                      {children}
                    </div>
                  </components.SingleValue>
                )}
              />
            </div>
            <div className="w-[120px]">
              <ReSelect
                value={difficultySelected}
                options={DifficultyOptions}
                label=""
                SingleValue={({ children, ...props }: any) => (
                  <components.SingleValue {...props}>
                    <div
                      className="flex items-center"
                      style={{
                        columnGap: "8px",
                      }}
                    >
                      <BarChartSvg strokeOpacity={0.2} />
                      {children}
                    </div>
                  </components.SingleValue>
                )}
                onChange={(value: any) => {
                  setDifficultySelected(value);
                }}
              />
            </div>
            <div className="w-[145px]">
              <ReSelect
                value={categorySelected}
                options={CategoryOptions}
                label=""
                SingleValue={({ children, ...props }: any) => (
                  <components.SingleValue {...props}>
                    <div
                      className="flex items-center"
                      style={{
                        columnGap: "8px",
                      }}
                    >
                      <CodeBrowserSvg strokeOpacity={0.2} />
                      {children}
                    </div>
                  </components.SingleValue>
                )}
                onChange={(value: any) => {
                  setCategorySelected(value);
                }}
              />
            </div>
            <div className="w-[116px]">
              <ReSelect
                value={paymentTypeSelected}
                options={PaymentType}
                label=""
                SingleValue={({ children, ...props }: any) => (
                  <components.SingleValue {...props}>
                    <div
                      className="flex items-center"
                      style={{
                        columnGap: "8px",
                      }}
                    >
                      <CurrencyDollarCircleSvg strokeOpacity={0.2} />
                      {children}
                    </div>
                  </components.SingleValue>
                )}
                onChange={(value: any) => {
                  setPaymentTypeSelected(value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#FFFFFF1A] my-[20px]"></div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={twMerge(
                "py-2 px-3 rounded-md text-white text-sm leading-5 border border-[#FFFFFF0F] bg-[#FFFFFF14] cursor-pointer",
                tagSelected.includes(tag) ? "border-[#635AFF]" : ""
              )}
              onClick={() => {
                if (tagSelected.includes(tag)) {
                  setTagSelected(tagSelected.filter((t) => t !== tag));
                } else {
                  setTagSelected([...tagSelected, tag]);
                }
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <span
          className="text-white56 underline cursor-pointer"
          onClick={() => {
            setTagSelected([]);
          }}
        >
          Deselect All
        </span>
      </div>
    </section>
  );
};

export default FilterSection;
