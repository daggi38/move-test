import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import HomeHeroDescription from "../../common/components/hero-component/HomeHeroDescription";
import useFetchFeaturedCollection from "../../hooks/use-fetch-featured-collection";

import About from "./components/about-moveit/Index";
import FitnessProgram from "./components/fitness-program/Index";
import GetEntertained from "./components/get-entertained/Index";
import LandingHero from "./components/landing-hero/Index";

const Main = () => {
  const { hasFeaturedCollection, fitnessFeature, entertainmentFeature } =
    useFetchFeaturedCollection();
  console.log(fitnessFeature);

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />

      <LandingHero />
      <HomeHeroDescription />
      <About />

      {hasFeaturedCollection && fitnessFeature?.id &&  <FitnessProgram />}

      {hasFeaturedCollection && entertainmentFeature?.id && <GetEntertained />}

      <Footer />
    </div>
  );
};

export default Main;
