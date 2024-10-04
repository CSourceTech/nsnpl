import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { products } from '@/data/products'
import { useRouter } from 'next/router'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isProductsOpen, setIsProductsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { data: session } = useSession()
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const router = useRouter()
    const isHomePage = router.pathname === '/'
    const navRef = useRef(null)
    const productsRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 700);
        };

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (productsRef.current && !productsRef.current.contains(event.target)) {
                setIsProductsOpen(false);
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

    const handleProductClick = (productName) => {
        router.push(`/product/${productName}`);
        setIsOpen(false);
        setIsProductsOpen(false);
    };

    return (
        <nav className={`fixed z-50 top-0 left-0 right-0 shadow-lg ${scrolled ? `bg-black/40 backdrop-blur-md` : `bg-white`}`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${scrolled ? `text-white` : `text-gray-800`}`}>
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center w-full md:w-3/4">
                            <img src="https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/logo-300x70removebg.png" alt="NSNPL" width={250} height={50} className="py-2" />
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center gap-2">
                        <div className="relative" ref={productsRef}>
                            <Button
                                variant="ghost"
                                className="flex items-end gap-1"
                                onClick={() => setIsProductsOpen(!isProductsOpen)}
                            >
                                Products
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'transform rotate-180' : ''}`} />
                            </Button>
                            {isProductsOpen && (
                                <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${isProductsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        {products.map((product) => (
                                            <Button
                                                key={product.name}
                                                variant="ghost"
                                                className="w-full text-left justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                onClick={() => handleProductClick(product.name)}
                                            >
                                                {product.name}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
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

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden" ref={navRef}>
                    <div className={`pt-2 pb-3 space-y-1 ${scrolled ? `bg-black/40 backdrop-blur-md text-white` : `bg-white text-black`}`}>
                        <div className="px-2">
                            <Button
                                variant="ghost"
                                className="w-full text-left justify-between items-center flex px-2"
                                onClick={() => setIsProductsOpen(!isProductsOpen)}
                            >
                                Products
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'transform rotate-180' : ''}`} />
                            </Button>
                            <div className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${isProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {products.map((product) => (
                                    <Button
                                        key={product.name}
                                        variant="ghost"
                                        className="w-full text-left justify-start mt-1"
                                        onClick={() => handleProductClick(product.name)}
                                    >
                                        {product.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <Button variant="ghost" className="w-full mt-2 justify-start" onClick={() => { router.push('/about'); setIsOpen(false); }}>
                            About
                        </Button>
                        {session ? (
                            <Button
                                variant="ghost"
                                className="w-full mt-2 justify-start"
                                onClick={() => signOut()}
                            >{session?.user?.name}</Button>
                        ) : (
                            <Button
                                variant="ghost"
                                className="w-full mt-2 justify-start"
                                onClick={() => signIn("google")}
                            >Login</Button>
                        )}
                        <Button variant="ghost" className="w-full mt-2 justify-start" onClick={() => { router.push('/cart'); setIsOpen(false); }}>
                            <div className="flex gap-2 items-center">
                                <div className="relative">
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    {totalQuantity > 0 &&
                                        <span className="absolute top-0 right-0 px-1 text-xs bg-green-500 text-white rounded-full">{totalQuantity}
                                        </span>
                                    }
                                </div>
                                Cart
                            </div>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}