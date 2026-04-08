import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FestivalInfo from "@/components/sections/FestivalInfo";
import AboutOrg from "@/components/sections/AboutOrg";
import Events from "@/components/sections/Events";
import Sponsors from "@/components/sections/Sponsors";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#05050A" }}>
      {/* Global background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="orb orb-purple w-[600px] h-[600px] top-[10%] left-[-10%] opacity-20" />
        <div className="orb orb-cyan w-[500px] h-[500px] top-[50%] right-[-15%] opacity-15" style={{ animationDelay: "-8s" }} />
        <div className="orb orb-pink w-[350px] h-[350px] bottom-[10%] left-[20%] opacity-10" style={{ animationDelay: "-12s" }} />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FestivalInfo />
        <Events />
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
