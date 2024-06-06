"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Hint {
    id: number;
    text: string;
    link?: string;
}

const Milestone1: React.FC = () => {

    const [hints, setHints] = useState<boolean[]>([false, false, false]);



    const handleShowHint = (index: number) => {
        const newHints = [...hints];
        newHints[index] = true;
        setHints(newHints);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Milestone 1: Understand the template</h1>
            <p className="mb-4">
                You probably got the same message as me when you opened a new tab:
            </p>
            <Image
                src="https://gyazo.com/27c5abd7040d20895060d549765a7202.png"
                alt="Error message screenshot"
                width={800}
                height={450}
                className="mb-4"
            />
            <p className="mb-4">
                Let's fix that! When we open a new tab it should be Google, not the plugin's default newtab. So instead of this:
            </p>
            <Image
                src="https://gyazo.com/27c5abd7040d20895060d549765a7202.png"
                alt="Error message screenshot"
                width={800}
                height={450}
                className="mb-4"
            />
            <p className="mb-4">
                It should be the usual Google newtab.
            </p>
            <h2 className="text-xl font-semibold mb-2">Task:</h2>
            <p className="mb-6">On newtab display Google instead of our plugin's newtab.html</p>
            <h2 className="text-xl font-semibold mb-2">Hints:</h2>
            <ul className="list-none p-0">
                <li className="mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
                        onClick={() => handleShowHint(0)}
                    >
                        Show Hint 1
                    </button>
                    {hints[0] && <p>Try Googling "chrome extension new tab stackoverflow".</p>}
                </li>
                <li className="mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
                        onClick={() => handleShowHint(1)}
                    >
                        Show Hint 2
                    </button>
                    {hints[1] && <p>There is a main.json that is responsible for everything, try looking at that and see what you can find.</p>}
                </li>
                <li className="mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
                        onClick={() => handleShowHint(2)}
                    >
                        Show Hint 3
                    </button>
                    {hints[2] && (
                        <p>
                            Check manifest.json and look at this Stack Overflow post to see how they did it:
                            <br />
                            <a
                                href="https://stackoverflow.com/questions/38000374/google-chrome-extension-default-in-a-new-tab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                https://stackoverflow.com/questions/38000374/google-chrome-extension-default-in-a-new-tab
                            </a>
                        </p>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Milestone1;
