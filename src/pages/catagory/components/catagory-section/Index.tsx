import React from "react";
import { useNavigate } from "react-router";
import SubcategoryCard from "../../../../common/components/cards/SubcatagoryCard";
import {
  Categories,
  SubCategory,
} from "../../../../models/categories/categories";
import HeroImage from "../../../../assets/images/hero-image.jpg";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";

interface CategoryProps {
  category: Categories;
  subCategory: SubCategory[];
  isLoading: boolean;
}

const CategorySection: React.FC<CategoryProps> = ({
  category,
  subCategory,
  isLoading,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-8 md:p-12 lg:p-20">
      <h2 className="text-light-yellow text-3xl sm:text-4xl md:text-5xl font-light font-Montserrat mb-6 sm:mb-8 md:mb-10">
        {category.title}
      </h2>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {isLoading ? (
          <>
            <ShimmerIndicator count={1} height={400} width={400} />
            <ShimmerIndicator count={1} height={400} width={400} />
          </>
        ) : (
          subCategory.map((subCategories) => (
            <SubcategoryCard
              key={subCategories.id}
              title={subCategories.title}
              description={subCategories.description}
              image={HeroImage}
            />
          ))
        )}
      </div> */}
    </div>
  );
};

export default CategorySection;
