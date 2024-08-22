"use client"

import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";

import { Suspense, useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

import Loading from "@/components/Loading";
import { useAuthContext } from "@/contexts/AuthContext";
import { createClient } from "@/utils/supabase/client";


interface Project {
    id?: string;
    created_at?: string;
    created_by: string;
    category: string;
    difficulty: string;
    description: string;
}
type SortKey = 'category' | 'difficulty';

interface SortConfig {
    key: SortKey | null;
    direction: 'asc' | 'desc' | null;
}

export default function Home() {

    const { isAuthenticated, authUser } = useAuthContext();
    const navigation = useRouter();
    const supabase = createClient();
    const [projects, setProjects] = useState<Project[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newProject, setNewProject] = useState<Omit<Project, 'id' | 'person'>>({
        description: "",
        category: "",
        difficulty: "",
    });


    const [errors, setErrors] = useState<{
        description?: string;
        category?: string;
        difficulty?: string;
    }>({});

    // Page loading
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const itemsPerPage = 20; // Change this to 20 later

    const observer = useRef<IntersectionObserver | null>(null);
    const lastProjectElementRef = useCallback((node) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                handleLoadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject(prev => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'description') {
            const error = validateDescription(value);
            setErrors(prev => ({
                ...prev,
                description: error || undefined,
            }));
        } else if (name === 'category' || name === 'difficulty') {
            setErrors(prev => ({
                ...prev,
                [name]: value ? undefined : `Please select a ${name}`,
            }));
        }
    };

    const addNewProject = () => {
        const descriptionError = validateDescription(newProject.description);
        const newErrors = {
            description: descriptionError || undefined,
            category: newProject.category ? undefined : 'Please select a category',
            difficulty: newProject.difficulty ? undefined : 'Please select a difficulty',
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error !== undefined)) {
            return;
        }

        setProjects(prev => [
            ...prev,
            {
                id: (prev.length + 1).toString(),
                person: authUser?.user_metadata.user_name || 'Anonymous',
                ...newProject,
            },
        ]);
        setNewProject({
            description: "",
            category: "",
            difficulty: "",
        });
        setErrors({});
        setIsModalOpen(false);
    };

    const fetchProjects = async () => {
        setIsLoading(true);

        const { data, error } = await supabase.rpc('get_ideas', {
            offset_value: offset,
            items_per_page: itemsPerPage
        });

        if (error) {
            console.error('Error fetching projects:', error);
        } else {
            if (data.length < itemsPerPage) {
                setHasMore(false);
            }
            setProjects(prevProjects => [...prevProjects, ...data]);
            setOffset(prevOffset => prevOffset + data.length);
        }

        setIsLoading(false);
    };

    const handleLoadMore = () => {
        if (!isLoading && hasMore) {
            fetchProjects();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        if (offset === 0) {
            fetchProjects();
        }
    }, [isModalOpen]);


    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLElement && e.target.id === 'modal-overlay') {
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

    const validateDescription = (description: string): string | null => {
        // Check for links
        if (/(http|https):\/\/[^\s]+/g.test(description)) {
            return "Links are not allowed in the description.";
        }

        // Check for weird symbols (you can adjust this regex as needed)
        if (/[^\w\s.,!?-]/g.test(description)) {
            return "Special characters are not allowed in the description.";
        }

        // Check for potential SQL injection attempts
        if (/(\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|DROP)\b)/gi.test(description)) {
            return "Invalid input detected.";
        }

        // Check for potential XSS attempts
        if (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(description)) {
            return "Invalid input detected.";
        }

        // Check for excessive capitalization (e.g., shouting)
        if (description.toUpperCase() === description && description.length > 10) {
            return "Please don't use all capital letters.";
        }

        // Check for minimum length
        if (description.trim().length < 10) {
            return "Description must be at least 10 characters long.";
        }

        // Check for maximum length
        if (description.length > 500) {
            return "Description must not exceed 500 characters.";
        }

        return null;
    };

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const month = date.toLocaleString('default', { month: 'short' });
        return `${day}. ${month}`;
    }

    <thead className="bg-[#FFFFFF0F]" >
        <tr>
            <th className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                Person
            </th>
            <th className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6 cursor-pointer" >
                <div className="flex justify-between items-center">
                    Category
                    <svg className="inline-block ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 192 512">
                        <path d="M96 48c13.3 0 24-10.7 24-24s-10.7-24-24-24S72 10.7 72 24s10.7 24 24 24zM24 264h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24zm144 160H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-72 80c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
                    </svg>
                </div>
            </th>
            <th className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6 cursor-pointer">
                <div className="flex justify-between items-center">
                    Difficulty
                    <svg className="inline-block ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 192 512">
                        <path d="M96 48c13.3 0 24-10.7 24-24s-10.7-24-24-24S72 10.7 72 24s10.7 24 24 24zM24 264h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24zm144 160H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-72 80c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
                    </svg>
                </div>
            </th>
            <th className="w-8/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                Description
            </th>
        </tr>
    </thead >
    return (
        <>
            <HeaderSection />
            <Suspense fallback={<Loading />}></Suspense>

            <div className="min-h-screen flex flex-col justify-start items-center">
                <h1 className="text-4xl font-bold mt-[140px]">Idea wall</h1>
                <p className="text-gray-500">Project ideas by me and you. Share and care</p>

                <div className="w-2/3 mt-[100px] mb-[100px] flex-grow">
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
                                    Date
                                </th>
                                <th className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                                    Person
                                </th>
                                <th
                                    className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6 cursor-pointer"
                                    onClick={() => {

                                    }}
                                >
                                    <div className="flex justify-between items-center">
                                        Category

                                    </div>
                                </th>
                                <th
                                    className="w-1/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6 cursor-pointer"
                                    onClick={() => {

                                    }}
                                >
                                    <div className="flex justify-between items-center">
                                        Difficulty
                                        { }
                                    </div>
                                </th>
                                <th className="w-8/12 text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects.map((project, index) => (
                                    <tr className="" key={`${project.id}-${index}`}>

                                        <td className="w-1/12 py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                            {project.created_at ? formatDate(project.created_at) : ''}
                                        </td>
                                        <td className="w-1/12 py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                            {project.created_by}
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

                {/* Intersection Observer target */}
                <div ref={lastProjectElementRef} style={{ height: '20px' }}></div>


                {isLoading && (
                    <div className="text-center py-4">
                        <p className="text-[#FFFFFFCC]">Loading more ideas...</p>
                    </div>
                )}

                {!isLoading && !hasMore && (
                    <div className="text-center py-4">
                        <p className="text-[#FFFFFFCC]">You found the end of the wall</p>
                    </div>
                )}

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
                                className={`w-full mb-2 p-2 bg-[#1F1F1F] text-white border ${errors.category ? 'border-red-500' : 'border-[#FFFFFF33]'} rounded`}
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="scripts">Scripts</option>
                            </select>
                            {errors.category && (
                                <p className="text-red-500 text-xs italic">{errors.category}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm mb-2" htmlFor="difficulty">Difficulty</label>
                            <select
                                name="difficulty"
                                id="difficulty"
                                value={newProject.difficulty}
                                onChange={handleChange}
                                className={`w-full mb-2 p-2 bg-[#1F1F1F] text-white border ${errors.difficulty ? 'border-red-500' : 'border-[#FFFFFF33]'} rounded`}
                            >
                                <option value="" disabled>Select Difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                            {errors.difficulty && (
                                <p className="text-red-500 text-xs italic">{errors.difficulty}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm mb-2" htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                value={newProject.description}
                                onChange={handleChange}
                                placeholder="Description"
                                className={`w-full mb-2 p-2 bg-[#1F1F1F] text-white border ${errors.description ? 'border-red-500' : 'border-[#FFFFFF33]'} rounded`}
                                style={{ height: "100px", resize: "none" }}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-xs italic">{errors.description}</p>
                            )}
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
                                className={`py-2 px-4 bg-blue-500 text-white rounded ${(Object.values(errors).some(error => error !== undefined) || !newProject.category || !newProject.difficulty || !newProject.description) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={Object.values(errors).some(error => error !== undefined) || !newProject.category || !newProject.difficulty || !newProject.description}
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
