import { Microscope, Lightbulb, Leaf, GraduationCap, Flower2 } from 'lucide-react'

const values = [
    { icon: Microscope, title: "Research Based Approach" },
    { icon: Lightbulb, title: "Innovation" },
    { icon: Leaf, title: "Serving Mankind" },
    { icon: Flower2, title: "Herbal Focus" },
    { icon: GraduationCap, title: "Education and Awareness" },
]

export function ValueBanner() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-200 transition-all duration-300">
                            <value.icon className="w-12 h-12 text-green-500 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}