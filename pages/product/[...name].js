import { Star, ShoppingCart, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDispatch } from 'react-redux'
import { addItemToCart } from '@/redux/cart-slice'
import Link from "next/link"

export default function ProductPage({ product }) {
    const dispatch = useDispatch()

    function addToCartHandler(product) {
        dispatch(addItemToCart(product))
    }

    // Scroll to product description
    function scrollToDesc() {
        const desc = document.getElementById("desc")
        window.scrollTo({
            top: desc.offsetTop - 100,
            behavior: "smooth"
        })
    }

    const reviews = [
        { id: 1, author: "John D.", rating: 5, comment: "Amazing product! Felt the difference in just a week." },
        { id: 2, author: "Sarah M.", rating: 4, comment: "Good results, but took a bit longer than expected." },
        { id: 3, author: "Mike R.", rating: 5, comment: "Excellent for liver health. Highly recommended!" },
    ]

    return (
        <div className="mx-auto px-4 py-8 mt-20">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex justify-center items-center bg-white rounded-lg shadow-md p-4">
                    <img src={product.image} alt={product.name} className="max-w-full h-auto object-contain" />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <div className="flex items-center mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(4) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">(14 reviews)</span>
                        </div>
                        <p
                            className="text-gray-600 mb-4"
                            onClick={scrollToDesc}
                        >
                            {product.description.slice(0, 200)}...
                        </p>
                        <div className="flex items-center mb-4">
                            <span className="text-3xl font-bold text-green-500">₹{product.price.toFixed(2)}</span>
                            <span className="ml-2 text-lg text-gray-500 line-through">
                                {product.originalPrice ? `₹${product.originalPrice.toFixed(2)}` : ""}
                            </span>
                            <span className="ml-2 text-sm text-green-500 font-semibold">
                                {product.originalPrice ? `${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF` : ""}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            className="flex-1"
                            variant="outline"
                            onClick={() => addToCartHandler(product)}
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                        <Button
                            className="flex-1 bg-green-500 hover:bg-green-600"
                            onClick={() => addToCartHandler(product)}
                            asChild
                        >
                            <Link href={`/cart`}>
                                <CreditCard className="mr-2 h-4 w-4" />
                                Buy now
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* product desc */}
            <section id="desc">
                <h2 className="text-2xl font-bold mt-12 mb-4">Product Description</h2>
                <p className="text-gray-600">{product.description}</p>
            </section>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-lg shadow p-4">
                            <div className="flex items-center mb-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                                    ))}
                                </div>
                                <span className="ml-2 font-semibold">{review.author}</span>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const { getProduct } = await import("@/data/products")

    const product = getProduct(params.name.toString())
    console.log("name", params.name.toString())
    console.log("product", product)
    return {
        props: {
            product
        }
    }
}