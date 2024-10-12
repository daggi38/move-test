
import HeroImage from "../../../../assets/images/hero-image.jpg";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";

const LandingHero = () => {
  return (
    <HeroComponent
    isHomePage={false}
      title={"Move, Compete, Entertain: Unleash the Thrill!"}
      description=" Move it is your go-to for fitness, fun, and entertainment!"
      imagePath={HeroImage}
    />
  );
};

export default LandingHero;
