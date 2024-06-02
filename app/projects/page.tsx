import AuthButton from "@/components/AuthButton";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Link from "next/link";

interface CardProps {
    title: string;
}

function Card({ title }: CardProps) {
    return (
        <div className="card w-64 h-64 border border-gray-300 rounded-lg p-4 m-4 flex items-center justify-center shadow-lg transition-colors duration-200 hover:bg-gray-200 hover:text-black">
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
    );
}

export default function Index() {
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

                        <a
                            href="projects"
                            className="font-bold hover:underline"
                        >
                            projects
                        </a>

                    </h1>
                    <AuthButton />
                </div>
            </nav>


            <div className="cards flex justify-center">
                <Link href="/projects/i-like-content/introduction">
                    <Card title="Free" />
                </Link>
                <Link href="/projects/robot-landing">
                    <Card title="Paid" />
                </Link>
            </div>
        </div>
    );
}