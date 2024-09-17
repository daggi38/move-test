import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import CategoryDescription from "./components/catagory-description/Index";
import CategoryHero from "./components/catagory-hero/Index";
import CategorySection from "./components/catagory-section/Index";


const Category = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <CategoryHero />
      <CategoryDescription />
      <CategorySection sectionTitle={"sectiontitle here"} />
      <Footer />
    </div>
  );
};

export default Category;
