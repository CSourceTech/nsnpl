
const features = [
    {
        title: "FOCUS ON PREVENTION & CURE",
        image: "https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/11.webp",
    },
    {
        title: "NO SIDE EFFECTS",
        image: "https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/222.webp",
    },
    {
        title: "WORKS ON ROOT CAUSE",
        image: "https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/333.webp",
    },
]

export function WhyNSNPLBanner() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-4">
                    Why Natural Solutions & Neutraceuticals pvt. ltd
                </h2>
                <p className="text-gray-600 text-center mb-12">
                    We are more inclined to serve patients through herbal formulations
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-center uppercase">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}