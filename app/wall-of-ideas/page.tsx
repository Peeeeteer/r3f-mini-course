"use client"

import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";

import { Suspense, useState } from "react";
import Loading from "@/components/Loading";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Home() {

    const projects = [
        {
            id: "1",
            person: "Looyd",
            categegory: "frontend",
            difficulty: "easy",
            description: "this is a project description",
            read_more: "https://www.google.com",
        },
        {
            id: "2",
            person: "Looyd",
            categegory: "backend",
            difficulty: "easy",
            description: "chrome plugin that makes you more productive",
            read_more: "https://www.google.com",
        },
        {
            id: "3",
            person: "Looyd",
            categegory: "backend",
            difficulty: "easy",
            description: "chrome plugin that makes you more productive",
            read_more: "https://www.google.com",
        },

    ];

    const isLoading = false;

    return (
        <>
            <HeaderSection />
            <Suspense fallback={<Loading />}></Suspense>

            <div className="min-h-screen flex flex-col justify-start items-center">
                <h1 className="text-4xl font-bold mt-[140px]">Idea wall</h1>
                <p className="text-gray-500">Project ideas by me and you. Share and care</p>

                <div className="w-2/3 mt-[100px]">
                    <div className="flex justify-start mb-4">
                        <button className="py-2 px-3 rounded-md text-white text-sm leading-5 border border-[#FFFFFF0F] bg-[#635AFF] cursor-pointer mr-2">Add new idea</button>
                        <button className="py-2 px-3 rounded-md text-white text-sm leading-5 border border-[#FFFFFF0F] bg-[#FFFFFF14] cursor-pointer mr-2">Category</button>
                        <button className="py-2 px-3 rounded-md text-white text-sm leading-5 border border-[#FFFFFF0F] bg-[#FFFFFF14] cursor-pointer mr-2">Difficulty</button>

                    </div>
                    <table className="border-collapse table-fixed w-full text-sm mt-[20px]">
                        <thead className="bg-[#FFFFFF0F]">
                            <tr>
                                <th className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                                    Person
                                </th>
                                <th className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                                    Categegory
                                </th>
                                <th className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                                    Difficulty
                                </th>
                                <th className="w-8/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                                    Description
                                </th>
                                <th className="w-2/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading ?
                                    <tr>
                                        <td colSpan={4} className="text-center py-5 italic">Getting history data</td>
                                    </tr>
                                    :
                                    projects.map((project) => (
                                        <tr className="" key={project.id}>
                                            <td className="w-1/12 py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                                {project.person}
                                            </td>

                                            <td className="w-1/12 py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                                {project.categegory}
                                            </td>
                                            <td className="w-1/12 py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                                {project.difficulty}
                                            </td>

                                            <td className="w-8/12 py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                                {project.description}
                                            </td>

                                            <td className="w-2/12 py-[26px] px-6 text-sm leading-[20px] text-[#635AFF] border-b border-[#FFFFFF33]">
                                                <Link href={`/projects/${project.read_more}`}>
                                                    Read more...
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>

            <FooterSection />
        </>
    );
}