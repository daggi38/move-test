import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import HomeHeroDescription from "../../common/components/hero-component/HomeHeroDescription";
import UseFetchFeaturedCollection from "../../hooks/use-fetch-featured-collection";
import About from "./components/about-moveit/Index";

import FitnessProgram from "./components/fitness-program/Index";
import GetEntertained from "./components/get-entertained/Index";
import LandingHero from "./components/landing-hero/Index";

const Main = () => {
  const {featuredCollection,isBusy}=UseFetchFeaturedCollection()
  console.log(featuredCollection)
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />

      <LandingHero />
      <HomeHeroDescription />
      <About />
      <FitnessProgram />
      <GetEntertained />
      <Footer />
    </div>
  );
};

export default Main;
