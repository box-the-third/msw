import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Milestones from "@/components/Milestones";
import Services from "@/components/Services";
import PastEvents from "@/components/PastEvents";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <>
      <span id="top" />
      <Header />
      <main>
        <HeroCarousel />
        <Milestones />
        <Services />
        <PastEvents />
        <Clients />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
