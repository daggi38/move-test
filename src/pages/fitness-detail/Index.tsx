import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import FitnessDetailHeroDescription from "./components/fitness-detail-hero-description/Index";
import FitnessDetailHero from "./components/fitness-detail-hero/Index";
import TrainingSection from "./components/training-section/Index";

const FitnessDetail = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <FitnessDetailHero />
      <FitnessDetailHeroDescription />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default FitnessDetail;
