import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import ItemsSection from "./components/items-section/Index";

import TrainingSection from "./components/items-section/Index";
import SubCatagoryDescription from "./components/Sub-catagory-description/Index";
import SubCatagoryHero from "./components/sub-catagory-hero/Index";

const Subcatagory = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <SubCatagoryHero />
      <SubCatagoryDescription />
      <ItemsSection title={""} menuItems={[   ]} />
      <Footer />
    </div>
  );
};

export default Subcatagory;
