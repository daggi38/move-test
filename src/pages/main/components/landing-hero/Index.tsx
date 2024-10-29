import HeroImage from "../../../../assets/images/hero-image.jpg";
import {  homePageSubTitle, homePageTitle } from "../../../../common/app-strings";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";

const LandingHero = () => {
  return (
    <HeroComponent
     isFullscreen={true}
      isHomePage={true}
      title={homePageTitle}
      description={homePageSubTitle}
      imagePath={HeroImage}
      isLoading={false}
    />
  );
};

export default LandingHero;
