import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession, signIn, signOut } from 'next-auth/react'

const products = [
    { name: "Painkiller Plus", href: "/products/painkiller-plus" },
    { name: "Allergy Relief", href: "/products/allergy-relief" },
    { name: "Cold & Flu Fighter", href: "/products/cold-flu-fighter" },
    { name: "Digestive Health", href: "/products/digestive-health" },
    { name: "Sleep Aid", href: "/products/sleep-aid" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { data: session } = useSession()

    return (
        <nav className="bg-black/40 backdrop-blur-md fixed z-50 top-0 left-0 right-0 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-gray-800">
                                <img src="https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/Logo_wh.webp" alt="NSNPL" width={250} height={50} />
                            </span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost">Products</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {products.map((product) => (
                                    <DropdownMenuItem key={product.name}>
                                        <Link href={product.href}>{product.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button asChild variant="ghost">
                            <Link href="/about" className="hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </Link>
                        </Button>
                        {session ? (
                            <Button
                                variant="ghost"
                                onClick={() => signOut()}
                            >{session?.user?.name}</Button>
                        ) : (
                            <Button
                                variant="ghost"
                                onClick={() => signIn("google")}
                            >Login</Button>
                        )}
                        <Button variant="ghost" className="ml-2" asChild>
                            <Link href="/cart"><ShoppingCart className="h-5 w-5" /></Link>
                        </Button>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-full text-left">Products</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {products.map((product) => (
                                    <DropdownMenuItem key={product.name}>
                                        <Link href={product.href}>{product.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="ghost" className="w-full mt-2">
                            <Link href="/about">About</Link>
                        </Button>
                        {session ? (
                            <Button
                                variant="outline"
                                className="w-full mt-2"
                                onClick={() => signOut()}
                            >Logout</Button>
                        ) : (
                            <Button
                                variant="outline"
                                className="w-full mt-2"
                                onClick={() => signIn("google")}
                            >Login</Button>
                        )}
                        <Button variant="ghost" className="w-full mt-2" asChild>
                            <Link href="/cart" className="flex gap-2 items-center justify-center">
                                <ShoppingCart className="h-5 w-5 mr-2" />
                                Cart
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}