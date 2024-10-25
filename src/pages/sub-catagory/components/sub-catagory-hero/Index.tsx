import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import TradeMill from "../../../../assets/images/fitness-cardio.jpg";
import { SubCategory } from "../../../../models/categories/categories";

interface CategoryProps {
  subCategory: SubCategory;
  isLoading: boolean;
}

const SubCategoryHero: React.FC<CategoryProps> = ({
  subCategory,
  isLoading,
}) => {
  return (
    <HeroComponent
      isLoading={isLoading}
      title={subCategory.title}
      description={subCategory.short_desc}
      imagePath={TradeMill}
      isHomePage={true}
    />
  );
};

export default SubCategoryHero;
