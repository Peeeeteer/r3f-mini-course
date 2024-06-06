import AuthButton from '@/components/AuthButton'
import Image from 'next/image'
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
                            introduction
                        </p>

                    </h1>
                    <AuthButton />
                </div>
            </nav>

            <div className="flex flex-col items-start space-y-4">
                <Link href="/projects/robot-landing/[milestone]" as="/projects/robot-landing/introduction"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Introduction</button></Link>
                <Link href="/projects/robot-landing/[milestone]" as="/projects/robot-landing/milestone1"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Milestone 1</button></Link>
                <Link href="/projects/robot-landing/[milestone]" as="/projects/robot-landing/milestone2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Milestone 2</button></Link>
            </div>
            <p className="">
                Welcome to the introduction page. Today we will be making this.
            </p>
            <Image
                src="https://gyazo.com/03d2435a3215d673d3d089474f5536b4.png"
                alt="Error message screenshot"
                width={800}
                height={450}
            />
            <p>
                I know its ugly but it works great
                A full on chrome plugin that will allow you to do crazy stuff.
            </p>
            <p>
                and ofcourse if you want to, you will be able to make it even better to this:
            </p>
            <Image
                src="https://gyazo.com/ed6bffbdca12a1839acda981f4c5a231.png"
                alt="Error message screenshot"
                width={800}
                height={450}
            />

        </div>
    )
}

export default Introduction