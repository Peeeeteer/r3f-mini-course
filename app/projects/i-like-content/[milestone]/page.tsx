import AuthButton from '@/components/AuthButton'
import Milestone1 from '../_components/Milestone1';
import Milestone2 from '../_components/Milestone2';

import Link from 'next/link';



export default function IlikeContent({ params }: { params: { milestone: string } }) {



    const path = params.milestone;

    let milestoneComponent;
    switch (path) {
        case 'milestone1':
            milestoneComponent = <Milestone1 />;
            break;
        case 'milestone2':
            milestoneComponent = <Milestone2 />;
            break;
        // add other cases for other milestones...
        default:
            milestoneComponent = <div>No such milestone</div>;
    }

    return (
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                    <h1>
                        <a href="/" className="font-bold hover:underline">justcode</a>
                        <span className="mx-2">/</span>
                        <p className="font-bold hover:underline">{path}</p>
                    </h1>
                    <AuthButton />
                </div>
            </nav>
            <div className="flex flex-col items-start space-y-4">
                <Link href="/projects/i-like-content/[milestone]" as="/projects/i-like-content/introduction"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Introduction</button></Link>
                <Link href="/projects/i-like-content/[milestone]" as="/projects/i-like-content/milestone1"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Milestone 1</button></Link>
                <Link href="/projects/i-like-content/[milestone]" as="/projects/i-like-content/milestone2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Milestone 2</button></Link>
            </div>
            {milestoneComponent}
        </div>
    );
}