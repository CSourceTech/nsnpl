"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CartPage() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        // In a real application, you would fetch the cart items from an API or local storage
        // For this example, we'll use some dummy data
        setCartItems([
            { id: '1', name: 'Painkiller Plus', price: 9.99, quantity: 2, image: '/placeholder.svg' },
            { id: '2', name: 'Allergy Relief', price: 12.99, quantity: 1, image: '/placeholder.svg' },
        ])
    }, [])

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        ))
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    if (cartItems.length === 0) {
        return (
            <section className="container mx-auto px-4 py-8 text-center mt-20">
                <ShoppingCart className="mx-auto h-24 w-24 text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="mb-4">Looks like you haven't added any items to your cart yet.</p>
                <Link href="/">
                    <Button>Continue Shopping</Button>
                </Link>
            </section>
        )
    }

    return (
        <section className="mx-auto px-4 py-8 w-full md:w-3/4 mt-20">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            <div className="space-y-8">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                        <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                        <div className="flex-grow">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-gray-600">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                                -
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </Button>
                        </div>
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-5 w-5" />
                        </Button>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
                <div>
                    <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">Shipping and taxes calculated at checkout</p>
                </div>
                <Button size="lg">Proceed to Checkout</Button>
            </div>
        </section>
    )
}