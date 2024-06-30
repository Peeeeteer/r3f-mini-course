import HashTag from "@/components/HashTag";
import { FC } from "react";
import CodeBrowserSvg from "@/components/Icons/CodeBrowserSvg";
import BarChartSvg from "@/components/Icons/BarChartSvg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TProject } from "@/types/Project";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface ProjectsSectionProps {
  projects: TProject[];
}

const ProjectsSection: FC<ProjectsSectionProps> = (
  props: ProjectsSectionProps
) => {
  return (
    <section>
      <div className="project pt-[114px] ">
        {props.projects.map((project, index) => (
          <Link href={project.url} key={index}>
            <div key={index} className="relative hash-tag">
              <div className="project-item flex justify-between gap-x-[80px] ">
                <div className="project-item-left w-full">
                  <div className="project-item-header flex items-center justify-between mb-6">
                    <div className="hash-tag relative z-50">
                      <HashTag type={project?.type} />
                    </div>
                    <div className="time">
                      <span className="text-white56 tracking-[0.2px] text-xs leading-4">
                        {project?.date}
                      </span>
                    </div>
                  </div>
                  <h2 className="font-bold text-2xl leading-7 text-white mb-4">
                    {project?.title}
                  </h2>
                  <p className="text-white56 text-sm leading-5 h-[115px]">
                    {project?.description}
                  </p>
                  <div>
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col ">
                        <div className="flex gap-x-4 mb-3">
                          <div className="flex gap-x-2">
                            <BarChartSvg strokeOpacity={0.2} />
                            <p className="text-white56 text-sm leading-5 ">
                              {project?.difficulty}
                            </p>
                          </div>
                          <div className="flex gap-x-2">
                            <CodeBrowserSvg strokeOpacity={0.2} />
                            <p className="text-white56 text-sm leading-5 ">
                              {project?.category}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                          {
                            // tags
                            project?.tags.map((tag, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-x-2"
                              >
                                <span
                                  className={twMerge(
                                    "text-light tracking-[0.2px] text-xs leading-4",
                                    tag.toLowerCase() === "react" && "text-lightGreen",
                                    tag.toLowerCase() === "figma" && "text-lightYellow",
                                    tag.toLowerCase() === "tailwindcss" && "text-lightBlue",
                                    tag.toLowerCase() === "chrome" && "text-white",
                                    tag.toLowerCase() === "three.js" && "text-blue-500",
                                    tag.toLowerCase() === "three" && "text-lightGreen",

                                  )}
                                >
                                  {tag}
                                </span>
                                {
                                  // add comma
                                  index < project?.tags.length - 1 && (
                                    <div className="bg-[#FFFFFF1A] w-1 h-1 rounded-full"></div>
                                  )
                                }
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div>

                        {project?.price !== null && project?.price !== undefined && (
                          <span className="block text-dark font-medium text-xl leading-8 px-[10px] py-1 rounded-lg bg-lightGreen">
                            {project?.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-item-right w-full max-w-[472px] image-container cursor-pointer ">
                  <Image
                    className="object-cover rounded-lg"
                    src={project?.image}
                    width={472}
                    height={315}
                    alt="project item 1"
                  />
                </div>
              </div>
              <div className="my-[80px] bg-[#FFFFFF1A] h-[1px] w-full"></div>
              <div
                className="pt-[40px] px-[32px] pb-0 rounded-[26px] -left-[32px] -top-[60px] box-content
            back-drop bg-[#12131333] absolute  w-full h-full opacity-0  hover:opacity-100 cursor-pointer transition-all"
              ></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default ProjectsSection;
