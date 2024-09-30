export const products = [
    {
        id: '1',
        name: 'Hepadetox',
        price: 599.00,
        description: 'Regulate Cholesterol, Rejuvenate Your Body, Alleviate Symptoms, Embrace Wellness, Helps diluting Body Fat, Helps prevent Hair Fall, Helps overcome Facial pigmentation',
        image: "https://www.shop.nsnpl2health.com/wp-content/uploads/2024/04/Hepadetox-300x300.webp"
    },
    {
        id: '2',
        name: 'Hepadetox Plus',
        price: 599.00,
        originalPrice: 1600.00,
        description: 'Regulate Cholesterol, Rejuvenate Your Body, Alleviate Symptoms, Embrace Wellness, Helps diluting Body Fat, Helps prevent Hair Fall, Helps overcome Facial pigmentation',
        image: "https://www.shop.nsnpl2health.com/wp-content/uploads/2024/08/h-300x300.png"
    },
    {
        id: '3',
        name: 'Succare',
        price: 599.00,
        description: 'Diabetes as said by IDF is a scourge, slowly engulfing country and entire world. India and entire world has been working round the clock to prevent and treat this dreaded disease which is also called silent killer',
        image: "https://www.shop.nsnpl2health.com/wp-content/uploads/2024/08/Succare-300x300.png"
    },
    {
        id: '4',
        name: 'Virulina',
        price: 799.00,
        description: 'Virulina is a research product by Dr Anil Sharma (Clinician & Researcher ) & Dr. Sandeep Arora(Professor & Director, Amity Institute of Pharmacy) for which patent has been granted bearing IPR No:404858',
        image: "https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/hypercum-300x300.webp"
    },
    {
        id: '5',
        name: 'Hypercum',
        price: 799.00,
        description: 'Hypercum is a combination of herbs & species and it helps to keep blood pressure completely under control. Hypercum is one of the few products for which extensive trials in humans and in vivo and in vitro studies in animals have been conducted and results have been overwhelming. We at NSNPL have not left single page unturned regards to potency and safety of the Hypercum though being an herbal product and considered safe. Hypercum is the end result of extensive research of more than a decade. Hypercum is a research product bearing patent No: 352347',
        image: "https://www.shop.nsnpl2health.com/wp-content/uploads/2024/03/Virulina002-300x300.webp"
    },
]

export function getProduct(name) {
    return products.find(product => product.name === name)
}