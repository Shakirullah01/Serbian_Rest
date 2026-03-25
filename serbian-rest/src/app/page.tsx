import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SignatureSection } from "@/components/sections/SignatureSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ReservationCtaSection } from "@/components/sections/ReservationCtaSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SignatureSection />
        <MenuSection />
        <FeaturesSection />
        <ReviewsSection />
        <GallerySection />
        <ReservationCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
