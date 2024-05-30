import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

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
        <div>
            {/* <NavBar /> */}
            <div className="cards flex justify-center">
                <Card title="Free" />
                <Card title="Paid" />
            </div>
        </div>
    );
}