import { Weight, Lock, Shell, Flame } from "lucide-react"

export default function AyurvedaInfographic() {
    return (
        <div className="bg-[#FFF3E0] p-8 font-sans text-[#2E4C2E] mx-auto">
            <h1 className="text-4xl font-serif text-center mb-4">Understanding Ayurveda</h1>
            <div className="flex justify-center mb-6">
                <svg width="40" height="20" viewBox="0 0 40 20">
                    <line x1="0" y1="10" x2="40" y2="10" stroke="#2E4C2E" strokeWidth="2" />
                    <circle cx="20" cy="10" r="5" fill="#2E4C2E" />
                </svg>
            </div>
            <p className="text-center mb-12 max-w-2xl mx-auto">
                Ayurveda, an ancient healing system, centers on balance. It focuses on bodily energies (Doshas), digestion (Agni), bodily tissues (Dhaatus), and waste elimination (Mala) for your bodily wellness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start">
                    <Lock className="w-8 mr-2 mt-1" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Dosha (दोष) <span className="font-normal">(दोष)</span></h2>
                        <p>Vata, Pitta, and Kapha Dosha - Each person has a unique blend of these, and imbalances among them can lead to health issues. Ayurveda aims to balance these energies to maintain health.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Shell className="w-8 mr-2 mt-1" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Mala (मल) <span className="font-normal">(मल)</span></h2>
                        <p>Mala refers to waste products or bodily excretions (such as urine, feces, and sweat). Proper elimination of Mala is crucial for maintaining good health.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Weight className="w-8 mr-2 mt-1" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Dhatu (धातु) <span className="font-normal">(धातु)</span></h2>
                        <p>Dhatus are the body's seven basic tissues (such as blood, muscle, bone, and reproductive tissues). Proper nourishment and maintenance of these Dhaatus contribute to overall health.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Flame className="w-8 mr-2 mt-1" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Agni (अग्नि) <span className="font-normal">(अग्नि)</span></h2>
                        <p>Agni represents the digestive fire in the body responsible for the digestion and assimilation of food. A balanced Agni is essential for good digestion and overall well-being.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}