import { AyurvedBanner } from "@/components/ayurveda-banner";
import AyurvedaInfographic from "@/components/ayurveda-infographic";
import { ValueBanner } from "@/components/banner";
import { Hero } from "@/components/hero";
import HolisticBanner from "@/components/holistic-banner";
import { ProductListing } from "@/components/products";
import { TrustBanner } from "@/components/trust";
import { WhyNSNPLBanner } from "@/components/whyus";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Natural Solutions</title>
      </Head>

      <Hero />
      <AyurvedBanner />
      <HolisticBanner />
      <ProductListing />
      <AyurvedaInfographic />
      <ValueBanner />
      <WhyNSNPLBanner />
      <TrustBanner />
    </>
  )
}