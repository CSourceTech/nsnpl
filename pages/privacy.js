import Head from "next/head";

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Privacy Policy for Natural Solutions & Neutraceuticals Pvt. Ltd." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mt-20 px-4 py-8 flex flex-col gap-3 md:max-w-6xl mx-auto">

                <h1 className="text-2xl font-bold">Privacy Policy</h1>

                <p>At Natural Solutions & Neutraceuticals Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information when you visit our website or interact with our services. By accessing or using the Natural Solutions & Neutraceuticals Pvt. Ltd. website, you consent to the practices described in this policy.</p>

                <h2 className="text-lg font-semibold">Information Collection:</h2>

                <ul className="list-disc pl-4">
                    <li>Personal Information: We may collect personal information, such as your name, email address, and other contact details when you voluntarily provide it to us through forms or other means on our website.</li>

                    <li>Log Data: Our servers automatically record information that your browser sends whenever you visit the Natural Solutions & Neutraceuticals Pvt. Ltd. website. This may include your IP address, browser type, referring/exit pages, and other similar data.</li>

                </ul>

                <h2 className="text-lg font-semibold">Cookies and Tracking Technologies:</h2>

                <ul className="list-disc pl-4">

                    <li>Cookies: We use cookies and similar tracking technologies to enhance your experience on our website, analyze trends, and gather information about user interactions. You can modify your browser settings to decline cookies, but this may affect certain features of the website.</li>

                    <li>Third-Party Analytics: We may use third-party analytics tools to collect and analyze non-personal information about your use of the website. These tools may use cookies or other tracking technologies to provide us with insights and improve our services.</li>


                </ul>

                <h2 className="text-lg font-semibold">Information Use:</h2>

                <p>We may use the information collected to:</p>

                <ul className="list-disc pl-4">
                    <li>Respond to your inquiries or provide you with the requested information.</li>

                    <li>Send you newsletters, updates, or promotional materials if you have subscribed to them.</li>

                    <li>Improve our website, services, and user experience.</li>

                </ul>

                <p>We will not sell, rent, or share your personal information with third parties for their direct marketing purposes without your consent.</p>

                <h2 className="text-lg font-semibold">Information Disclosure:</h2>


                <ul className="list-disc pl-4">
                    <li>We may share your personal information with trusted third-party service providers who assist us in operating our website and delivering our services. These providers are obligated to keep your information confidential and only use it for the purposes specified by us.</li>

                    <li>We may also disclose your information if required by law or in response to a valid legal request.</li>

                </ul>

                <h2 className="text-lg font-semibold">Data Security:</h2>

                <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.</p>

                <h2 className="text-lg font-semibold">Third-Party Websites:</h2>

                <p>Our website may contain links to third-party websites. This Privacy Policy does not apply to those websites, and we encourage you to review the privacy policies of those sites before providing any personal information.</p>

                <h2 className="text-lg font-semibold">Children's Privacy:</h2>

                <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove the information from our systems.</p>

                <h2 className="text-lg font-semibold">Changes to the Privacy Policy:</h2>

                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised policy will be effective when posted.</p>

                <p>If you have any questions or concerns about this Privacy Policy, please contact us using the information provided on our website.</p>

            </main>
        </>
    )
}
