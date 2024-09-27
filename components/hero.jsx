import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
    return (
        <div className="relative h-screen flex items-center justify-center text-center">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="relative z-20 text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Harnessing Natures Wisdom</h1>
                <p className="text-xl md:text-2xl mb-8">Nature itself is the best physician.</p>
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
                    <Link href="/shop">
                        Shop Now
                    </Link>
                </Button>
            </div>
        </div>
    )
}