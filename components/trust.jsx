import { Button } from "@/components/ui/button";

export function TrustBanner() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trust in Our Quality</h2>
                        <p className="mx-auto max-w-[700px] md:text-xl">
                            We source our ingredients from the best suppliers and manufacturers in the industry. We are committed to providing you with the highest quality products.
                        </p>
                    </div>
                    <Button variant="outline" className="bg-white text-green-600 hover:bg-blue-50">Learn More About Our Process</Button>
                </div>
            </div>
        </section>
    )
}