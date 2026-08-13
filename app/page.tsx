import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Hero } from "@/sections/Hero";
import { Audience } from "@/sections/Audience";
import { Utp } from "@/sections/Utp";
import { Advantages } from "@/sections/Advantages";
import { Pricing } from "@/sections/Pricing";
import { Gallery } from "@/sections/Gallery";
import { Access } from "@/sections/Access";
import { Security } from "@/sections/Security";
import { HowToRent } from "@/sections/HowToRent";
import { LeadForm } from "@/sections/LeadForm";
import { FinalCta } from "@/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <Utp />
        <Advantages />
        <Pricing />
        <Gallery />
        <Access />
        <Security />
        <HowToRent />
        <LeadForm />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
