import Image from 'next/image'
import Link from 'next/link'
import {
    FaFacebookF as Facebook,
    FaInstagram as Instagram,
    FaLinkedinIn as Linkedin,
    FaWhatsapp as WhatsApp,
    FaEnvelope as Mail,
    FaPhone as Phone
} from 'react-icons/fa'

export function Footer() {
    return (
        <footer className="bg-gray-700 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src="https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/Logo_wh.webp"
                            alt="Natural Solutions & Neutraceuticals Pvt. Ltd."
                            width={200}
                            height={50}
                            className="mb-4"
                        />
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/share/owJQbNqeKNgzzVd9/?mibextid=qi2Omg" className="hover:text-gray-300">
                                <Facebook size={24} />
                            </Link>
                            <Link href="https://www.instagram.com/nsnpl?igsh=MTE2dDM2b21xejIyMw==" className="hover:text-gray-300">
                                <Instagram size={24} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/natural-solutions-and-nutraceuticals/" className="hover:text-gray-300">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="https://wa.me/9167995442F" className="hover:text-gray-300">
                                <WhatsApp size={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Corporate Address */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Corporate Address</h3>
                        <p className="text-sm">
                            3rd Floor, A-304, Bonanza, Sahar Plaza Complex, Andheri - Kurla Road, J. B. Nagar, Andheri East Mumbai, Mumbai Suburban, Maharashtra: 400059
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-2">
                            <p className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <a href="mailto:info@nsnpl2health.com" className="text-sm hover:underline">info@nsnpl2health.com</a>
                            </p>
                            <p className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <a href="tel:+919167995442" className="text-sm hover:underline">+91 9167 995442</a>
                            </p>
                            <p className="flex items-center">
                                <WhatsApp size={16} className="mr-2" />
                                <span className="text-sm">+91 9167 995442</span>
                            </p>
                        </div>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Important Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/return" className="hover:underline">Return and Refund Policy</Link></li>
                            <li><Link href="/cancellation" className="hover:underline">Cancellation Policy</Link></li>
                            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/disclaimer" className="hover:underline">Disclaimer</Link></li>
                            <li><Link href="/shipping" className="hover:underline">Shipping Policy</Link></li>
                            <li><Link href="/terms" className="hover:underline">Terms and Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-600 text-center">
                <p className="text-sm">Copyright © {new Date().getFullYear()} Natural Solutions and Neutraceuticals , made with ❤ by Campaigning Source, all rights reserved.</p>
            </div>
        </footer>
    )
}