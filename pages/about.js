import Image from 'next/image'

const incubationPartners = [
    { name: 'Partner 1', image: 'https://www.shop.nsnpl2health.com/wp-content/uploads/2024/08/Picture14-5.png' },
    { name: 'Partner 2', image: 'https://www.shop.nsnpl2health.com/wp-content/uploads/2024/08/Picture15-1.png' },
]

const incubatorsAndPartners = [
    { name: 'Incubator 1', logo: 'https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/c1.webp' },
    { name: 'Incubator 2', logo: 'https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/c2.webp' },
]

const teamMembers = [
    { name: 'Dr. Sandeep Arora', role: 'B Sc, B Pharm, M Pharm, PhD (Pharma Sciences), PG Dip HRD, PG Dip Pharma Project Mgmt.', image: 'https://www.shop.nsnpl2health.com/wp-content/uploads/2024/08/Dr_Sandeep_Arora-1.png' },
    { name: 'Dr. Anil Sharma', role: 'MD', image: 'https://www.shop.nsnpl2health.com/wp-content/uploads/2024/08/Rectangle-77.png' },
    { name: 'Mrs. Nirmala Sharma', role: 'Chairman', image: 'https://www.shop.nsnpl2health.com/wp-content/uploads/2024/08/Mrs-Nirmala-Sharma-1.png' },
]

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 mt-20">
            <h1 className="text-4xl font-bold text-center text-green-700">Natural Solutions & Neutraceuticals Pvt, Ltd</h1>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center text-xl">
                We are more inclined to serve patients through herbal formulations
            </p>

            {/* Incubation Partners Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-16">
                <div className="flex flex-col justify-center mx-auto text-center">
                    <p className="max-w-2xl text-lg">
                        Brain Child of Dr Anil Sharma who is the founder and is clinician and researcher by profession. It is matter of Pride that we have been awarded patients for our two products Hypercum & Virulina and another five patents in pipeline. Again our Director Research and Development is Dr. Sandeep Arora Director Pharmacy Amity University who is also co reswe are more inclined to serve patients through herbal formulations earcher for Virulina.
                        <br />
                        Our tech partners are renowned university that is Chitkara from Punjab & Amity University.
                        <br />
                        We have innovative herbal products which have gone through stringent testing be it toxicity, In Vivo, In Vitro etc. Though we are more inclined to serve patients through herbal formulations we have chosen the path of Modern medicine for evaluation of their efficacy hence we proudly claim that our product are evidence based and exhibit potent efficacy.
                        <br />
                        We intend to serve patients through our franchise clinics pan India to start with we are planning to have our franchise clinics across Maharashtra.
                        <br />
                        We would like to invite entire medical fraternity who intends to join us in our endeavors to serve mankind thorough our franchise clinics
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Tech Partners</h2>
                    {incubationPartners.map((partner, index) => (
                        <div key={index} className="relative h-40">
                            <img
                                src={partner.image}
                                alt={partner.name}
                                
                                className="object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Who We Are Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Who We Are</h2>
                <p className="text-center max-w-3xl mx-auto text-lg">
                    We are pioneers in Polyherbal formulations. Polyherbal formulations have a vast potential for current & future treatments too. The combination of multiple herbs in these formulations can offer various advantages, including synergistic effects, enhanced bioavailability, reduced side effects, and a broader spectrum of therapeutic actions.
                </p>
            </div>

            {/* Incubators and Partners Logos */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-center">Our Incubators and Partners</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {incubatorsAndPartners.map((org, index) => (
                        <div key={index} className="relative w-84 h-84">
                            <img
                                src={org.logo}
                                alt={org.name}
                                
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div>
                <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Our Team</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="transition-transform duration-300 aspect-square"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                                <p className="text-white">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}