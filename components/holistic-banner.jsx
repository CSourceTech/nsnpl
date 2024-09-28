import React from 'react'
import Image from 'next/image'

export default function HolisticBanner() {
    return (
        <div className="bg-[#FFF3E0] p-8 rounded-3xl relative overflow-hidden">
            {/* Mandala-like decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFD54F] opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD54F] opacity-50 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFD54F] opacity-50 rounded-full -translate-x-1/2 translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FFD54F] opacity-50 rounded-full translate-x-1/2 translate-y-1/2" />

            {/* Main content */}
            <div className="relative z-10">
                <h1 className="text-5xl font-serif text-center text-[#4A4A4A] mb-2">Holistic</h1>
                <h2 className="text-xl font-sans text-center text-[#4A4A4A] mb-8">
                    HEALTH & WELLNESS SOLUTIONS FOR THE
                </h2>
                <h3 className="text-4xl font-sans font-bold text-center text-[#4A4A4A] mb-12">
                    NEW AGE LIFESTYLE
                </h3>

                {/* Image grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="flex flex-col items-center">
                        <div className="rounded-2xl overflow-hidden mb-4">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                                alt="Traditional Indian meal"
                                width={300}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-serif text-[#4A4A4A]">aahar</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-2xl overflow-hidden mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1603983616619-faf118d6c374?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYWN0aWNpbmclMjB5b2dhJTIwb3V0ZG9vcnN8ZW58MHx8MHx8fDA%3D"
                                alt="Woman practicing yoga outdoors"
                                width={300}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-serif text-[#4A4A4A]">vihaar</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-2xl overflow-hidden mb-4">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1716719138724-7fe49efee003?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwY29uc3VtaW5nJTIwbWVkaWNpbmV8ZW58MHx8MHx8fDA%3D"
                                alt="Man consuming health product"
                                width={300}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-serif text-[#4A4A4A]">chikitsa</span>
                    </div>
                </div>

                {/* Sanskrit text */}
                <div className="text-center font-serif text-[#4A4A4A] text-lg">
                    <p>वायु पिततं कफाचेति त्रयो देवाः समास्तः ॥</p>
                    <p>विकृत विकृत देहं घ्नन्ति ते वर्त्तयन्ति चा।</p>
                </div>
            </div>
        </div>
    )
}