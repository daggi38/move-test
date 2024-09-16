import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import HeroDescription from "../../common/components/hero-component/HeroDescription";
import EntertainmentDescription from "./components/entertainment-description/Index";
import EntertainmentHero from "./components/entertaiment-hero/Index";
import EntertainmentSection from "./components/entertainment-section/Index";

const EntertainmentPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <EntertainmentHero />
      <EntertainmentDescription />
      <EntertainmentSection />

      <Footer />
    </div>
  );
};

export default EntertainmentPage;
