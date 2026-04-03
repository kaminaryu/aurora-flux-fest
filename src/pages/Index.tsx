import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FestivalInfo from "@/components/FestivalInfo";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FestivalInfo />
      <Events />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
