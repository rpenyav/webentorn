import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import ProcessSection from "../sections/ProcessSection";
import UseCasesSection from "../sections/UseCasesSection";
import TechSection from "../sections/TechSection";
import ContactSection from "../sections/ContactSection";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <UseCasesSection />
        <TechSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
