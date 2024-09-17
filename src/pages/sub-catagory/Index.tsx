import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import ItemsSection from "./components/items-section/Index";

import TrainingSection from "./components/items-section/Index";
import SubCategoryDescription from "./components/Sub-catagory-description/Index";
import SubCategoryHero from "./components/sub-catagory-hero/Index";


const Subcategory = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <SubCategoryHero/>
      <SubCategoryDescription />
      <ItemsSection title={""} menuItems={[   ]} />
      <Footer />
    </div>
  );
};

export default Subcategory;
