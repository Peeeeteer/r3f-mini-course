import AuthButton from '@/components/AuthButton'
import Link from 'next/link'
import React from 'react'

const Introduction = () => {


    return (
        <div className="flex-1 w-full flex flex-col gap-20 items-center">

            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                    <h1>
                        <a
                            href="/"
                            className="font-bold hover:underline"
                        >
                            justcode
                        </a>
                        <span className="mx-2">/</span>

                        <p
                            className="font-bold hover:underline"
                        >
                            Milestone 1. Make a NavBar
                        </p>

                    </h1>
                    <AuthButton />
                </div>
            </nav>

            <div className="flex flex-col items-start space-y-4">
                <Link href="/projects/i-like-content/[milestone]" as="/projects/i-like-content/introduction"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Introduction</button></Link>
                <Link href="/projects/i-like-content/[milestone]" as="/projects/i-like-content/milestone1"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Milestone 1</button></Link>
                <Link href="/projects/i-like-content/[milestone]" as="/projects/i-like-content/milestone2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Milestone 2</button></Link>
            </div>
            <h1>
                <p>Welcome to the project introduction.</p>
            </h1>

        </div>
    )
}

export default Introduction