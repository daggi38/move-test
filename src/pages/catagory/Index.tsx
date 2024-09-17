import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import CatagoryDescription from "./components/catagory-description/Index";
import CatagoryHero from "./components/catagory-hero/Index";
import CatagorySection from "./components/catagory-section/Index";

const Catagory = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <CatagoryHero />
      <CatagoryDescription />
      <CatagorySection sectionTitle={"sectiontitle here"} />
      <Footer />
    </div>
  );
};

export default Catagory;
