import { ValueBanner } from "@/components/banner";
import { Hero } from "@/components/hero";
import { ProductListing } from "@/components/products";
import { WhyNSNPLBanner } from "@/components/whyus";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Natural Solutions</title>
      </Head>

      <Hero />
      <ValueBanner />
      <ProductListing />
      <WhyNSNPLBanner />
    </>
  )
}