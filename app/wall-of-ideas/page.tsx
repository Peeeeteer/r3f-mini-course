"use client"

import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";

import { Suspense, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Loading from "@/components/Loading";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useAuthContext } from "@/contexts/AuthContext";

export default function Home() {
    const navigation = useRouter();
    const { isAuthenticated, authUser } = useAuthContext();

    const [projects, setProjects] = useState([
        {
            id: "1",
            person: "looyd",
            category: "frontend",
            difficulty: "easy",
            description: "this is a project description",
        },
        {
            id: "2",
            person: "looyd",
            category: "backend",
            difficulty: "easy",
            description: "chrome plugin that makes you more productive chrome plugin that makes you more productivechrome plugin that makes you more productivechrome plugin that makes you more productivechrome plugin that makes you more productivechrome plugin that makes you more productivechrome plugin that makes you more productive chrome plugin that makes you more productivechrome plugin that makes you more productivechrome plugin that makes you more productive",
        },
        {
            id: "3",
            person: "looyd",
            category: "backend",
            difficulty: "easy",
            description: "chrome plugin that makes you more productive",
        },
    ]);

    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProject, setNewProject] = useState({
        description: "",
        category: "",
        difficulty: "",
    });

    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProject({
            ...newProject,
            [name]: value,
        });
    };

    const addNewProject = () => {
        setProjects([
            ...projects,
            {
                id: (projects.length + 1).toString(),
                person: authUser?.user_metadata.user_name || 'Anonymous',
                ...newProject,
            },
        ]);
        setNewProject({
            description: "",
            category: "",
            difficulty: "",
        });
        setIsModalOpen(false); // Close the modal
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            setIsModalOpen(false);
        }
    };

    const handleAddNewIdeaClick = () => {
        if (!isAuthenticated) {
            navigation.push("/auth/login");
        } else {
            setIsModalOpen(true);
        }
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedProjects = [...projects].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setSortConfig({ key, direction });
        setProjects(sortedProjects);
    };

    const renderSortIcon = (key) => {
        if (sortConfig.key === key) {
            if (sortConfig.direction === 'asc') {
                return (
                    <svg className="inline-block ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M279 224H41c-21.4 0-32.1 25.9-17 41l119 136c11.2 12.7 31 12.7 42.3 0l119-136c15-15.1 4.4-41-17-41z" />
                    </svg>
                );
            } else {
                return (
                    <svg className="inline-block ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M41 288h238c21.4 0 32.1-25.9 17-41l-119-136c-11.2-12.7-31-12.7-42.3 0L24 247c-15 15.1-4.4 41 17 41z" />
                    </svg>
                );
            }
        } else {
            // Default unsorted icon
            return (
                <svg className="inline-block ml-1 w-3 h-3 opacity-50" fill="currentColor" viewBox="0 0 192 512">
                    <path d="M96 48c13.3 0 24-10.7 24-24s-10.7-24-24-24S72 10.7 72 24s10.7 24 24 24zM24 264h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24zm144 160H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-72 80c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
                </svg>
            );
        }
    };

    return (
        <>
            <HeaderSection />
            <Suspense fallback={<Loading />}></Suspense>

            <div className="min-h-screen flex flex-col justify-start items-center">
                <h1 className="text-4xl font-bold mt-[140px]">Idea wall</h1>
                <p className="text-gray-500">Project ideas by me and you. Share and care</p>

                <div className="w-2/3 mt-[100px]">
                    <div className="flex justify-start mb-4">
                        <button
                            onClick={handleAddNewIdeaClick}
                            className="py-2 px-3 rounded-md text-white text-sm leading-5 border border-[#FFFFFF0F] bg-[#635AFF] cursor-pointer mr-2"
                        >
                            Add new idea
                        </button>
                    </div>

                    <table className="border-collapse table-fixed w-full text-sm mt-[20px]">
                        <thead className="bg-[#FFFFFF0F]">
                            <tr>
                                <th className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                                    Person
                                </th>
                                <th
                                    className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6 cursor-pointer"
                                    onClick={() => handleSort('category')}
                                >
                                    {renderSortIcon('category')} Category
                                </th>
                                <th
                                    className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6 cursor-pointer"
                                    onClick={() => handleSort('difficulty')}
                                >
                                    {renderSortIcon('difficulty')} Difficulty
                                </th>
                                <th className="w-8/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                                    Description
                                </th>
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
                                                {project.category}
                                            </td>
                                            <td className="w-1/12 py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                                {project.difficulty}
                                            </td>
                                            <td className="w-8/12 py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                                {project.description}
                                            </td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm"
                    onClick={handleClickOutside}
                >
                    <div className="bg-[#121313] p-6 rounded-md w-[400px] border border-[#FFFFFF33] relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-white text-lg"
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-bold text-white mb-4">Add New Idea</h2>
                        <div className="mb-4">
                            <label className="block text-white text-sm mb-2" htmlFor="category">Category</label>
                            <select
                                name="category"
                                id="category"
                                value={newProject.category}
                                onChange={handleChange}
                                className="w-full mb-4 p-2 bg-[#1F1F1F] text-white border border-[#FFFFFF33] rounded"
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="scripts">Scripts</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm mb-2" htmlFor="difficulty">Difficulty</label>
                            <select
                                name="difficulty"
                                id="difficulty"
                                value={newProject.difficulty}
                                onChange={handleChange}
                                className="w-full mb-4 p-2 bg-[#1F1F1F] text-white border border-[#FFFFFF33] rounded"
                            >
                                <option value="" disabled>Select Difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm mb-2" htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                value={newProject.description}
                                onChange={handleChange}
                                placeholder="Description"
                                className="w-full mb-4 p-2 bg-[#1F1F1F] text-white border border-[#FFFFFF33] rounded"
                                style={{ height: "100px", resize: "none" }} // Making the description input longer
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="py-2 px-4 bg-gray-700 text-white rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={addNewProject}
                                className="py-2 px-4 bg-blue-500 text-white rounded"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
}
