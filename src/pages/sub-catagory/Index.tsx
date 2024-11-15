import { useParams } from "react-router";
import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import ItemsSection from "./components/items-section/Index";

import SubCategoryDescription from "./components/Sub-catagory-description/Index";
import SubCategoryHero from "./components/sub-catagory-hero/Index";

import useFetchSingleSubCategories from "../../hooks/use-fetch-single-sub-category";

const Subcategory = () => {
  const { id } = useParams<{ id?: string }>();

  const { subCategory, series, isBusy, isDataFetched, tagItems, hasSeries } =
    useFetchSingleSubCategories(id || "");

  const isLoading = !isDataFetched || !series;

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <SubCategoryHero subCategory={subCategory} isLoading={isBusy} />
      <SubCategoryDescription subCategory={subCategory} />

      {hasSeries ? (
        <ItemsSection
          series={series}
        isLoading={isLoading}
          tagItems={tagItems}
        />
      ) : (
        <div className="h-20 w-full"></div>
      )}
      <Footer />
    </div>
  );
};

export default Subcategory;
