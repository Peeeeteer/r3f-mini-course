"use client"

import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import ProjectsSection from "@/containers/home-page/projects-section";
import { mockProjects } from "@/store/milestone";
import ToolSection from "@/containers/tools";


const tags = ["React", "Tailwindcss", "Three.js",];


export default function Home() {

    const [tagSelected, setTagSelected] = useState<string[]>([]);

    return (
        <>
            <HeaderSection />
            <Suspense fallback={<Loading />}></Suspense>
            <div className="min-h-screen flex flex-col justify-start items-center">
                <h1 className="text-4xl font-bold mt-[140px]">Tools</h1>
                <p className="text-gray-500">Everything you need to build better coding projects & some freelancer stuff...</p>

                <div className="w-full flex justify-center mt-[60px] relative">
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
                        className="text-white56 underline cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 mr-[100px]"
                        onClick={() => {
                            setTagSelected([]);
                        }}
                    >
                        Deselect All
                    </span>
                </div>

                <ToolSection projects={mockProjects} />

                {/* <div className="flex flex-wrap justify-center mt-[100px] gap-6">
                    <div className="w-64 h-64 bg-gray-200 p-4 flex flex-col items-center">
                        <img src="dummy-image-1.jpg" alt="Dummy 1" className="w-full h-32 object-cover mb-4" />
                        <p className="text-lg font-semibold">Item 1</p>
                        <p className="text-gray-600">$10.00</p>
                    </div>


                    <div className="w-64 h-64 bg-gray-200 p-4 flex flex-col items-center">
                        <img src="dummy-image-2.jpg" alt="Dummy 2" className="w-full h-32 object-cover mb-4" />
                        <p className="text-lg font-semibold">Item 2</p>
                        <p className="text-gray-600">$20.00</p>
                    </div>


                    <div className="w-64 h-64 bg-gray-200 p-4 flex flex-col items-center">
                        <img src="dummy-image-3.jpg" alt="Dummy 3" className="w-full h-32 object-cover mb-4" />
                        <p className="text-lg font-semibold">Item 3</p>
                        <p className="text-gray-600">$30.00</p>
                    </div>
                </div> */}
            </div>

            <FooterSection />
        </>


    );


}
