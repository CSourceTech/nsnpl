import { useState, useEffect, useRef } from 'react'
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
import { useSelector } from 'react-redux'
import { products } from '@/data/products'
import { useRouter } from 'next/router'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { data: session } = useSession()
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const router = useRouter()
    const isHomePage = router.pathname === '/'
    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 700);
        };

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            if (isHomePage) {
                window.removeEventListener('scroll', handleScroll);
            }
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isHomePage]);

    return (
        <nav className={`fixed z-50 top-0 left-0 right-0 shadow-lg ${scrolled ? `bg-black/40 backdrop-blur-md` : `bg-white`}`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${scrolled ? `text-white` : `text-gray-800`}`}>
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <img src="https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/logo-300x70removebg.png" alt="NSNPL" width={250} height={50} className="py-2" />
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
                                        <Link href={`/product/${product.name}`}>{product.name}</Link>
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
                            <Link href="/cart" className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                {totalQuantity > 0 &&
                                    <span className="absolute top-0 right-0 px-1 text-xs bg-green-500 text-white rounded-full">{totalQuantity}
                                    </span>
                                }
                            </Link>
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
                    <div className="pt-2 pb-3 space-y-1 text-white">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-full text-left">Products</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {products.map((product) => (
                                    <DropdownMenuItem key={product.name}>
                                        <Link href={`/product/${product.name}`}>{product.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="ghost" className="w-full mt-2">
                            <Link href="/about">About</Link>
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
                        <Button variant="ghost" className="w-full mt-2" asChild>
                            <Link href="/cart" className="flex gap-2 items-center justify-center">
                                <div className="relative">
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    {totalQuantity > 0 &&
                                        <span className="absolute top-0 right-0 px-1 text-xs bg-green-500 text-white rounded-full">{totalQuantity}
                                        </span>
                                    }

                                </div>
                                Cart
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}