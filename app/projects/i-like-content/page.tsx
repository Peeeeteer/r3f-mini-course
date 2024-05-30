import AuthButton from '@/components/AuthButton'
import React from 'react'

const IlikeContent = () => {
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

            <h1>
                I like content ( Free )
            </h1>
        </div>
    )
}

export default IlikeContent