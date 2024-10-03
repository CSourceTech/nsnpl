import Head from "next/head";

export default function Cancellation() {
    return (
        <>
            <Head>
                <title>Cancellation Policy</title>
                <meta name="description" content="Cancellation Policy for Natural Solutions & Neutraceuticals Pvt. Ltd." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mt-20 px-4 py-8 flex flex-col gap-3 md:max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold">Cancellation Policy</h1>

                <p>At Natural Solutions & Neutraceuticals Pvt. Ltd., we understand that sometimes plans change and you may need to cancel your order. Our cancellation policy is designed to be as straightforward and hassle-free as possible.</p>

                <h2 className="text-lg font-semibold">Order Cancellation</h2>
                <ul className="list-disc pl-4">
                    <li>Before Shipment: You may cancel your order for a full refund anytime before it has been shipped. Please contact our customer service team at [info@nsnpl2health.com] or call us at [+91 7304430089] with your order number to initiate the cancellation.</li>

                    <li>After Shipment: If your order has already been shipped, it cannot be canceled. In such cases, you can refer to our Return Policy for returning the item.</li>

                </ul>

                <h2 className="text-lg font-semibold">Pre-Order Cancellation</h2>
                <p>If you have placed a pre-order for an item that is not yet available, you can cancel your pre-order at any time before the item is shipped. Contact our customer service team at [info@nsnpl2health.com] or call us at [+91 7304430089] with your order details to cancel your pre-order.</p>

                <h2 className="text-lg font-semibold">Refund Process</h2>

                <ul className="list-disc pl-4">
                    <li>Refund Method: Once your cancellation is confirmed, we will process your refund to the original method of payment. Please note that it may take some time for your bank or credit card company to process and post the refund.</li>

                    <li>Processing Time: Refunds will be processed within [5-7] business days after receiving your cancellation request.</li>

                </ul>

                <h2 className="text-lg font-semibold">Non-Cancellable Orders</h2>

                <ul className="list-disc pl-4">
                    <li>Gift Cards: Orders for gift cards cannot be canceled once the order has been placed.</li>

                    <li>Custom Orders: Custom or personalized items cannot be canceled once the order has been placed.</li>

                </ul>

                <h2 className="text-lg font-semibold">Partial Cancellation</h2>

                <p>If you wish to cancel part of your order, please contact our customer service team. We will assist you with the process and update your order accordingly. Refunds for the canceled items will be processed as per our refund policy.</p>

                <h2 className="text-lg font-semibold">Contact Us</h2>

                <p>Customer Service: For any questions regarding your return or refund, please contact our customer service team at [info@nsnpl2health.com] or call us at [+91 9167995442]. Our customer service hours are from [10:00 AM to 6:00 PM on all working days].</p>

                <h2 className="text-lg font-semibold">Changes to This Policy</h2>

                <p>We reserve the right to update or modify this Cancellation Policy at any time without prior notice. Any changes will be effective immediately upon posting to our website.</p>

                <p>Thank you for shopping with Natural Solutions & Neutraceuticals Pvt. Ltd(NSNPL). We value your business and are committed to providing you with the best products and service.</p>

            </main>
        </>

    )
}
