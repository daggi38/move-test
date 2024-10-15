import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import TradeMill from "../../../../assets/images/fitness-cardio.jpg";
import { SubCategory } from "../../../../models/categories/categories";

interface CategoryProps {
  singleSubCategory: SubCategory;

}

const SubCategoryHero: React.FC<CategoryProps> = ({ singleSubCategory}) => {
  return (
    <HeroComponent
      title={singleSubCategory.title}
      description={singleSubCategory.short_desc}
      imagePath={TradeMill}
      isHomePage={true}
    />
  );
};

export default SubCategoryHero;
