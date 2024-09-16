import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import HeroDescription from "../../common/components/hero-component/HeroDescription";

import FitnessHero from "./components/fitness-hero/Index";
import FitnessSection from "./components/fitness-section/Index";

const FitnessPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <FitnessHero />
      <HeroDescription
      isDetailPage={true}
        descriptionOne="Welcome to MoveIt Fitness, where every workout is an adventure and every step brings you closer to your fitness goals! Whether you're just starting your fitness journey or you're a seasoned pro, MoveIt Fitness offers a diverse range of workout videos designed to keep you motivated, energized, and excited to move"
        title="Fitness"
        descriptionTwo="From heart-pumping cardio sessions to muscle-building strength training, high-intensity interval workouts to calming yoga flows, we have something for everyone. Our expert instructors guide you through each routine with enthusiasm and expertise, ensuring that you not only achieve your fitness goals but also have a blast doing it"
        descriptionThree="At MoveIt Fitness, we believe that fitness should be fun, engaging, and accessible to all. That’s why our videos are crafted to fit every fitness level and lifestyle. Join us today and discover a new way to move, sweat, and smile. Let’s get fit, have fun, and MoveIt together"
      />
      <FitnessSection/>

      <Footer />
    </div>
  );
};

export default FitnessPage;
