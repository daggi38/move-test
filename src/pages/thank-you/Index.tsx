import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import HeroComponent from "../../common/components/hero-component/HeroComponent";
import BackgroundImage from "../../assets/images/hero-image.jpg"

const ThankYou = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <HeroComponent
        description="Your journey starts now! We’ll be in touch with tips, workouts, and entertainment just for you."
        title="Thanks For Subscribing"
        imagePath={BackgroundImage}
      />

      <Footer />
    </div>
  );
};

export default ThankYou;
