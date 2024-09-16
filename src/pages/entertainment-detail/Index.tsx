import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import EntertainmentDescription from "../entertaiment/components/entertainment-description/Index";
import EntertainmentHeroDescription from "./components/entertainment-detail-description/Index";

import EntertainmentDetailHero from "./components/entertainment-detail-hero/Index";
import PerformancesSection from "./components/performances/Index";

const EntertainmentPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <EntertainmentDetailHero />
      <EntertainmentHeroDescription/>
      <PerformancesSection/>

      <Footer />
    </div>
  );
};

export default EntertainmentPage;
