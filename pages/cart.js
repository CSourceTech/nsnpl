import Link from 'next/link';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, reduceItemFromCart } from '@/redux/cart-slice';

export default function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const reduceItem = (id) => {
        dispatch(reduceItemFromCart(id));
    };

    const addItem = (item) => {
        dispatch(addItemToCart(item));
    };

    const removeItem = (id) => {
        dispatch(removeItemFromCart(id));
    };


    if (cartItems.length === 0) {
        return (
            <section className="container mx-auto px-4 py-8 text-center mt-20">
                <ShoppingCart className="mx-auto h-24 w-24 text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="mb-4">Looks like you haven't added any items to your cart yet.</p>
                <Link href="/shop">
                    <Button>Continue Shopping</Button>
                </Link>
            </section>
        );
    }

    return (
        <section className="mx-auto px-4 py-8 w-full md:w-3/4 mt-20">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            <div className="space-y-8">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between space-x-4 border-b pb-4">
                        <div className="flex flex-col md:flex-row md:gap-5 items-center">
                            <img src={item?.image} alt={item?.name} width={80} height={80} className="rounded-md" />
                            <div className="flex-grow">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-gray-600">{item.price.toFixed(2)} ₹</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:gap-12">
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => reduceItem(item.id)}
                                >
                                    -
                                </Button>
                                <span>{item.quantity}</span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => addItem(item)}
                                >
                                    +
                                </Button>
                            </div>
                            <div className="flex items-center">
                                <p className="font-semibold">{(item.price * item.quantity).toFixed(2)} ₹</p>
                                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                                    <Trash2 className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-between items-center flex-col md:flex-row gap-y-3">
                <div>
                    <p className="text-lg font-semibold">Total: {total.toFixed(2)} ₹</p>
                    <p className="text-sm text-gray-600">Shipping and taxes calculated at checkout</p>
                </div>
                <Button size="lg">Proceed to Checkout</Button>
            </div>
        </section>
    );
}