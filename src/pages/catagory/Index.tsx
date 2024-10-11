import { useParams } from "react-router";
import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import CategoryDescription from "./components/catagory-description/Index";
import CategoryHero from "./components/catagory-hero/Index";
import CategorySection from "./components/catagory-section/Index";
import useFetchSingleCategories from "../../hooks/use-fetch-single-category";

const Category = () => {
  const { id } = useParams<{ id?: string }>();

 
  const { category, subCategory ,isBusy  } = useFetchSingleCategories(id || "");

  

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <CategoryHero category={category} isLoading={isBusy}/>
      <CategoryDescription category={category}  />
      <CategorySection category={category} subCategory={subCategory} isLoading={isBusy} />
      <Footer />
    </div>
  );
};

export default Category;
