"use client";

import Stepper from "@/components/Stepper";
import FooterProcess from "@/containers/projects/components/FooterProcess";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { usePathname, useRouter } from "next/navigation";

export default function MilestoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = useRouter();
  const params = usePathname();

  const { milestone } = useMilestoneStore();
  const { currentHint = 0, hints = [] } = milestone || {};

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <Stepper
          activeStep={currentHint || 0}
          onChangeStep={(step) => {
            if (!milestone) return;
            const urlSplit = params.split("/");
            urlSplit.shift();
            urlSplit.pop();
            urlSplit.push(step.toLocaleLowerCase());
            const newUrl = urlSplit.join("/");
            navigation.push("/" + newUrl);
          }}
          steps={hints.map((hint) => hint?.label || "")}
        ></Stepper>
      </div>
      <div className="h-[calc(100dvh-290px)] overflow-y-auto scrollable -mr-4 pr-4">{children}</div>
      <FooterProcess />
    </div>
  );
}
