import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import { Categories } from "../../../../models/categories/categories";

interface CategoryProps {
  category: Categories;
  isLoading: boolean;
}

const CategoryHero: React.FC<CategoryProps> = ({ category, isLoading }) => {
  return (
    <HeroComponent
      isLoading={isLoading}
      isHomePage={true}
      title={category.page_title}
      description={category.page_sub_title}
      imagePath={category.images[0]?.path || ""}
    />
  );
};

export default CategoryHero;
