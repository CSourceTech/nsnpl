import { Button } from "@/components/ui/button"
import { products } from '@/data/products'
import Link from 'next/link'
import { useDispatch } from "react-redux"
import { addItemToCart } from '@/redux/cart-slice'

export function ProductListing() {

    const dispatch = useDispatch()

    function addToCartHandler(product) {
        dispatch(addItemToCart(product))
    }

    const filteredProducts = products.slice(0, 4)

    return (
        <div className="bg-white py-12 w-full md:w-11/12 mx-auto">
            <div className="mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-green-500 mb-4">Our Products</h2>
                <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    We have innovative herbal products that have gone through stringent testing be it toxicity, In Vivo, In Vitro,
                    etc. Though we have chosen the path of Modern medicine for evaluation of their efficacy
                </p>
                <div className="flex flex-col md:flex-row gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg md:w-96 mx-auto">
                            <div className="">
                                <Link href={`/product/${product.name}`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="p-3 w-full"
                                    />
                                </Link>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    <Link href={`/product/${product.name}`}>{product.name}</Link>
                                </h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <span className="text-sm text-red-500 line-through">
                                        ₹{Math.round((product.price * 1.89) / 100) * 100}
                                    </span>
                                    <span className="text-lg font-bold">
                                        ₹{product.price.toFixed(2)}
                                    </span>
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
            </div>
            <Button variant="outline" className="mt-4 hover:bg-green-200 flex justify-center items-center w-fit mx-auto" asChild>
                <Link href="/shop">View All Products</Link>
            </Button>
        </div>
    )
}