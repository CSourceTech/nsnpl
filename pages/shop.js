import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products } from '@/data/products'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '@/redux/cart-slice'
import Link from 'next/link'

export default function ShopPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch()

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const addToCartHandler = (product) => {
        dispatch(addItemToCart(product))
    }

    return (
        <main className=''>
            <div className="relative h-80 mb-8">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h1 className="text-4xl font-bold text-white">Shop Our Products</h1>
                </div>
            </div>

            <div className="mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <Input
                        type="text"
                        placeholder="Search products..."
                        className="mb-4 md:mb-0 md:w-11/12 mx-auto"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mx-auto gap-10 mb-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={product.image}
                                alt={product.name}

                                className="p-3 w-80"
                            />
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm text-red-500 line-through">
                                            {product?.originalPrice ? `₹${product?.originalPrice ? product.originalPrice.toFixed(2) : ""}` : ""}
                                        </span>
                                        <span className="text-lg font-bold">
                                            ₹{product.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    <Button
                                        className="w-full"
                                        variant="outline"
                                        onClick={() => addToCartHandler(product)}
                                    >
                                        Add To Cart
                                    </Button>
                                    <Button
                                        className="w-full bg-green-500 hover:bg-green-600"
                                        onClick={() => addToCartHandler(product)}
                                        asChild
                                    >
                                        <Link href={`/cart`}>Buy now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-600 mt-8">No products found. Try adjusting your search or filter.</p>
                )}
            </div>
        </main>
    )
}