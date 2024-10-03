import Head from "next/head";

export default function Shipping() {
    return (
        <>
            <Head>
                <title>Shipping Policy</title>
                <meta name="description" content="Shipping Policy for Natural Solutions & Neutraceuticals Pvt. Ltd." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mt-20 px-4 py-8 flex flex-col gap-3 md:max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold">Shipping Policy</h1>

                <h2 className="text-lg font-semibold">Order Dispatch and Delivery:</h2>
                <p>Orders placed on our website (referred to as the “Platform”) will be dispatched within 24 working hours from the confirmation of your order.</p>

                <p>Once dispatched, your order will be delivered within 5 to 7 working days. Delivery times may be subject to delays due to unavoidable circumstances at the delivery location.</p>

                <p>Delivery may also be delayed if your location is not covered under the jurisdiction of our courier services.</p>

                <h2 className="text-lg font-semibold">Delivery Address and Coordination:</h2>

                <p>If the address provided at the time of placing the order is insufficient or incorrect, you will need to coordinate with the delivery personnel/delivery partner, especially if they attempt to contact you via the provided phone number.</p>

                <p>Delivery attempts will be made at least twice. If you are unavailable at the delivery location, if the address is improper, or if the provided phone number is not working at the time of delivery, your order will be marked as RTO (Return to Origin).</p>

                <p>Once your order is marked as RTO and received by us, your refund will be initiated as per our refund policy.</p>

                <p>Orders marked as RTO will not be re-delivered to your location. If you still wish to purchase the items, please place a new order on the Platform.</p>

                <h2 className="text-lg font-semibold">Delivery Options:</h2>

                <p>No early delivery is available at the current time.</p>

                <h2 className="text-lg font-semibold">Expiration Date Legislation:</h2>

                <p>In compliance with the amendments to the Legal Metrology (Packaged Commodities) Rules, 2011 by the Government of India, it is mandatory to display certain product information, including “Best before or use by date, month and year”, for packages containing commodities that may become unfit for human consumption after a period of time, on online e-commerce marketplaces. The display of 'Best before date' was rolled out in phases to all fulfillment by us.</p>

                <table className="table-auto border md:w-3/4 mx-auto">
                    <thead className="bg-gray-200 text-left">
                        <tr>
                            <th className="p-4 border-r-2">Product</th>

                            <th className="p-4 border-r-2">Shelf Life (in %) Minimum and Maximum</th>
                        </tr>
                    </thead>

                    <tbody className="text-left">
                        <tr className="border-b-2 hover:bg-gray-100 transition-colors duration-300">
                            <td className="p-4 border-r-2">Products having shelf life less than 6 months</td>
                            <td className="p-4 border-r-2">Minimum :- 20% Maximum:- 100%</td>
                        </tr>
                        <tr className="border-b-2 hover:bg-gray-100 transition-colors duration-300">
                            <td className="p-4 border-r-2">Products having shelf life less than One Year</td>
                            <td className="p-4 border-r-2">Minimum :- 10% Maximum:- 100%</td>
                        </tr>
                        <tr className="border-b-2 hover:bg-gray-100 transition-colors duration-300">
                            <td className="p-4 border-r-2">Products having shelf life more than One Year</td>
                            <td className="p-4 border-r-2">Minimum :- 10% Maximum:- 100%</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-lg font-semibold">Shipping Charges:</h2>

                <p>Order value ≥ INR 1000: Delivery Charges = INR 0</p>

                <p>Order value between INR 500-1000: Delivery Charges = INR 60</p>

                <p>Order value between INR 0-499: Delivery Charges = INR 80</p>

                <h2 className="text-lg font-semibold">Cash on Delivery (COD):</h2>

                <p>The cash on Delivery (COD) option is unavailable.</p>

                <p>For any inquiries or further information, please contact us at info@nsnpl2health.com or call +91 7304430089.</p>

            </main>

        </>
    )
}

// Shipping Policy
// Order Dispatch and Delivery:

// Orders placed on our website (referred to as the “Platform”) will be dispatched within 24 working hours from the confirmation of your order.

// Once dispatched, your order will be delivered within 5 to 7 working days. Delivery times may be subject to delays due to unavoidable circumstances at the delivery location.

// Delivery may also be delayed if your location is not covered under the jurisdiction of our courier services.

 

// Delivery Address and Coordination:

// If the address provided at the time of placing the order is insufficient or incorrect, you will need to coordinate with the delivery personnel/delivery partner, especially if they attempt to contact you via the provided phone number.

// Delivery attempts will be made at least twice. If you are unavailable at the delivery location, if the address is improper, or if the provided phone number is not working at the time of delivery, your order will be marked as RTO (Return to Origin).

// Once your order is marked as RTO and received by us, your refund will be initiated as per our refund policy.

// Orders marked as RTO will not be re-delivered to your location. If you still wish to purchase the items, please place a new order on the Platform.

 

// Delivery Options:

// No early delivery is available at the current time.

 

// Expiration Date Legislation:

// In compliance with the amendments to the Legal Metrology (Packaged Commodities) Rules, 2011 by the Government of India, it is mandatory to display certain product information, including “Best before or use by date, month and year”, for packages containing commodities that may become unfit for human consumption after a period of time, on online e-commerce marketplaces. The display of ‘Best before date’ was rolled out in phases to all fulfillment by us.

 
//table
// Product

// Shelf Life (in %) Minimum and Maximum

// Products having shelf life less than 6 months

// Minimum :- 20%
// Maximum:- 100%

// Products having shelf life less than One Year

// Minimum :- 10%
// Maximum:- 100%

// Products having shelf life more than One Year

// Minimum :- 10%
// Maximum:- 100%

 

// Shipping Charges:

// Order value ≥ INR 1000: Delivery Charges = INR 0

// Order value between INR 500-1000: Delivery Charges = INR 60

// Order value between INR 0-499: Delivery Charges = INR 80

 

// Cash on Delivery (COD):

// The cash on Delivery (COD) option is unavailable.

// For any inquiries or further information, please contact us at info@nsnpl2health.com or call +91 7304430089.