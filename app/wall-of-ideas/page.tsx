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
    created_by?: string;
    category: string;
    difficulty: string;
    description: string;
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

    const [filter, setFilter] = useState<{ category: string, difficulty: string }>({
        category: 'All',
        difficulty: 'All'
    });

    const [errors, setErrors] = useState<{
        description?: string;
        category?: string;
        difficulty?: string;
    }>({});

    const [canSubmit, setCanSubmit] = useState(true);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


    //    //! Modal & user can post stuff
    const addNewProject = async () => {
        if (!canSubmit) {
            alert("Please wait 1 minute before submitting another idea.");
            return;
        }

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

        setIsLoading(true);

        // If the authUser exists, just triple checking
        if (authUser) {
            const { data, error } = await supabase
                .from('ideas')
                .insert([
                    {
                        created_at: new Date().toISOString(),
                        created_by: authUser.user_metadata.user_name,
                        category: newProject.category,
                        difficulty: newProject.difficulty,
                        description: newProject.description,
                    }
                ])
                .select();

            setIsLoading(false);

            if (error) {
                console.error('Error adding new project:', error);
                // You might want to show an error message to the user here
            } else if (data) {
                // Add the new project to the local state
                setProjects(prev => [data[0], ...prev]);

                // Reset the form
                setNewProject({
                    description: "",
                    category: "",
                    difficulty: "",
                });
                setErrors({});
                setIsModalOpen(false);

                // Update last submission time
                localStorage.setItem('lastSubmissionTime', Date.now().toString());
                setCanSubmit(false);
                setTimeout(() => setCanSubmit(true), 60000);
            }
        }
    };

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

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

    }, [isModalOpen]);

    useEffect(() => {
        const checkSubmissionStatus = () => {
            const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
            if (lastSubmissionTime) {
                const timeSinceLastSubmission = Date.now() - parseInt(lastSubmissionTime);
                if (timeSinceLastSubmission < 60000) { // 60000 ms = 1 minute
                    setCanSubmit(false);
                    const remainingTime = 60000 - timeSinceLastSubmission;
                    timeoutRef.current = setTimeout(() => setCanSubmit(true), remainingTime);
                }
            }
        };

        checkSubmissionStatus();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };

    }, []);


    //  //! Loading & Filtering project ideas
    const [hasMore, setHasMore] = useState<boolean>(true);

    const [cursor, setCursor] = useState<string | null>(null);
    const itemsPerPage = 20;

    const observer = useRef<IntersectionObserver | null>(null);
    const lastProjectElementRef = useCallback((node: HTMLDivElement | null) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                handleLoadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);


    const fetchProjects = async () => {
        setIsLoading(true);

        //console.log('Fetching projects with filters:', filter);

        const { data, error } = await supabase.rpc('get_ideas', {
            cursor_value: cursor || null, // Ensure it's null if undefined
            items_per_page: itemsPerPage,
            category_filter: filter.category === 'All' ? null : filter.category,
            difficulty_filter: filter.difficulty === 'All' ? null : filter.difficulty
        });

        if (error) {
            console.error('Error fetching projects:', error);
        } else {
            //console.log('Fetched data:', data);

            if (data.length < itemsPerPage) {
                setHasMore(false);
            } else {
                setHasMore(true);
            }

            setProjects(prevProjects => {
                return cursor === null ? data : [...prevProjects, ...data];
            });

            if (data.length > 0) {
                setCursor(data[data.length - 1].created_at);
            }
        }

        setIsLoading(false);
    };

    const handleLoadMore = () => {
        if (!isLoading && hasMore) {
            fetchProjects();
        }
    };
    useEffect(() => {
        //console.log('Current filters:', filter);

        // These lines are now handled in handleFilterChange
        // setCursor(null);
        // setHasMore(true);

        fetchProjects();
    }, [filter.category, filter.difficulty]);


    const [dateDropdownOpen, setDateDropdownOpen] = useState(false);

    const handleFilterChange = (type: 'category' | 'difficulty', value: string) => {
        setFilter(prev => ({ ...prev, [type]: value }));
        setCursor(null); // Reset cursor when filter changes
        setHasMore(true); // Reset hasMore when filter changes
        setProjects([]); // Clear existing projects when filter changes
    };


    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [difficultyDropdownOpen, setDifficultyDropdownOpen] = useState(false);

    useEffect(() => {
        const closeDropdowns = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('.dropdown-container')) {
                setCategoryDropdownOpen(false);
                setDifficultyDropdownOpen(false);
            }
        };

        document.addEventListener('click', closeDropdowns);
        return () => document.removeEventListener('click', closeDropdowns);
    }, []);

    //console.log("Projects", projects);


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
                            // Add the same onhover effect as the Category button 

                            className="py-2 px-3 rounded-md text-white text-sm leading-5 border border-[#FFFFFF0F] bg-[#635AFF] cursor-pointer mr-2 hover:bg-[#635AFF] hover:bg-opacity-50 transition-colors duration-150"
                        >
                            Add new idea
                        </button>
                    </div>
                    <table className="border-collapse table-fixed w-full text-sm mt-[20px]">
                        <thead className="bg-[#FFFFFF0F]">
                            <tr>
                                <th className="pl-2 w-[5%] text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-2">
                                    Date
                                </th>
                                <th className="w-[10%] text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-2">
                                    Person
                                </th>
                                {/* <th className="w-[7%] text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-1 px-1">
                                    <div className="relative inline-block text-left dropdown-container w-full">
                                        <button
                                            type="button"
                                            className="inline-flex justify-between items-center w-full px-2 py-1 text-xs font-medium text-white bg-[#635AFF] rounded-sm hover:bg-opacity-80 focus:outline-none"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setDateDropdownOpen(!dateDropdownOpen);
                                                setCategoryDropdownOpen(false);
                                                setDifficultyDropdownOpen(false);
                                            }}
                                        >
                                            {dateSort.display}
                                            <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {dateDropdownOpen && (
                                            <div className="absolute z-10 left-0 w-[120%] mt-1 origin-top-left bg-[#1F1F1F] rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <button
                                                    onClick={() => {
                                                        handleDateSortChange('asc');
                                                        setDateDropdownOpen(false);
                                                    }}
                                                    className={`${dateSort.direction === 'asc' ? 'bg-[#635AFF] text-white' : 'text-[#FFFFFFCC]'} block w-full text-left px-2 py-1 text-xs hover:bg-[#635AFF] hover:bg-opacity-50 transition-colors duration-150`}
                                                >
                                                    Asc ↑
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        handleDateSortChange('desc');
                                                        setDateDropdownOpen(false);
                                                    }}
                                                    className={`${dateSort.direction === 'desc' ? 'bg-[#635AFF] text-white' : 'text-[#FFFFFFCC]'} block w-full text-left px-2 py-1 text-xs hover:bg-[#635AFF] hover:bg-opacity-50 transition-colors duration-150`}
                                                >
                                                    Desc ↓
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </th>*/}
                                <th className="w-[10%] text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-1 px-1">
                                    <div className="relative inline-block text-left dropdown-container w-full">
                                        <button
                                            type="button"
                                            className="inline-flex justify-between items-center w-full px-2 py-1 text-xs font-medium text-white bg-[#635AFF] rounded-sm hover:bg-opacity-80 focus:outline-none"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCategoryDropdownOpen(!categoryDropdownOpen);
                                                setDateDropdownOpen(false);
                                                setDifficultyDropdownOpen(false);
                                            }}
                                        >
                                            {filter.category === 'All' ? 'Category' : filter.category}
                                            <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {categoryDropdownOpen && (
                                            <div className="absolute z-10 left-0 w-full mt-1 origin-top-left bg-[#1F1F1F] rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {['All', 'Frontend', 'Backend', 'Scripts'].map((category) => (
                                                    <button
                                                        key={category}
                                                        onClick={() => {
                                                            handleFilterChange('category', category);
                                                            setCategoryDropdownOpen(false);
                                                        }}
                                                        className={`${filter.category === category ? 'bg-[#635AFF] text-white' : 'text-[#FFFFFFCC]'
                                                            } block w-full text-left px-2 py-1 text-xs hover:bg-[#635AFF] hover:bg-opacity-50 transition-colors duration-150`}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </th>
                                <th className="w-[10%] text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-1 px-1">
                                    <div className="relative inline-block text-left dropdown-container w-full">
                                        <button
                                            type="button"
                                            className="inline-flex justify-between items-center w-full px-2 py-1 text-xs font-medium text-white bg-[#635AFF] rounded-sm hover:bg-opacity-80 focus:outline-none"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setDifficultyDropdownOpen(!difficultyDropdownOpen);
                                                setDateDropdownOpen(false);
                                                setCategoryDropdownOpen(false);
                                            }}
                                        >
                                            {filter.difficulty === 'All' ? 'Difficulty' : filter.difficulty}
                                            <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {difficultyDropdownOpen && (
                                            <div className="absolute z-10 left-0 w-full mt-1 origin-top-left bg-[#1F1F1F] rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {['All', 'Easy', 'Medium', 'Hard'].map((difficulty) => (
                                                    <button
                                                        key={difficulty}
                                                        onClick={() => {
                                                            handleFilterChange('difficulty', difficulty);
                                                            setDifficultyDropdownOpen(false);
                                                        }}
                                                        className={`${filter.difficulty === difficulty ? 'bg-[#635AFF] text-white' : 'text-[#FFFFFFCC]'
                                                            } block w-full text-left px-2 py-1 text-xs hover:bg-[#635AFF] hover:bg-opacity-50 transition-colors duration-150`}
                                                    >
                                                        {difficulty}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </th>
                                <th className="w-[74%] text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-2">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <tr className="" key={`${project.id}-${index}`}>
                                    <td className="w-[5%] py-[26px] px-2 text-[#FFFFFFCC] text-s leading-[20px] border-b border-[#FFFFFF33]">
                                        {project.created_at ? formatDate(project.created_at) : ''}
                                    </td>
                                    <td className="w-[8%] py-[26px] px-2 text-[#FFFFFFCC] text-s leading-[20px] border-b border-[#FFFFFF33]">
                                        {project.created_by}
                                    </td>
                                    <td className="w-[10%] py-[26px] px-2 text-[#FFFFFFCC] text-s leading-[20px] border-b border-[#FFFFFF33]">
                                        {project.category}
                                    </td>
                                    <td className="w-[10%] py-[26px] px-2 text-[#FFFFFFCC] text-s leading-[20px] border-b border-[#FFFFFF33]">
                                        {project.difficulty}
                                    </td>
                                    <td className="w-[67%] py-[26px] px-2 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                                        {project.description}
                                    </td>
                                </tr>
                            ))}
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
                        <p className="text-[#FFFFFFCC]">The end of the wall</p>
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
                                className={`py-2 px-4 bg-blue-500 text-white rounded ${(isLoading || Object.values(errors).some(error => error !== undefined) || !newProject.category || !newProject.difficulty || !newProject.description) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isLoading || Object.values(errors).some(error => error !== undefined) || !newProject.category || !newProject.difficulty || !newProject.description}
                            >
                                {isLoading ? 'Adding...' : 'Add'}
                            </button>

                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
}
