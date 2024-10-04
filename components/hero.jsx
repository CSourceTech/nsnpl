import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
    return (
        <div className="relative h-screen flex items-center justify-center text-center">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/858/649/116/bowl-kettle-pitcher-glass-medicine-hd-wallpaper-1e60b62c6d5a97c13a6f84fe9e059dda.jpg')",
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