import React, { useState } from "react";
import { useNavigate } from "react-router";
import SubcategoryCard from "../../../../common/components/cards/SubcatagoryCard";
import {
  Categories,
  SubCategory,
} from "../../../../models/categories/categories";
import HeroImage from "../../../../assets/images/hero-image.jpg";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";
import ReactPaginate from "react-paginate";

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

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const pageCount = Math.ceil(subCategory.length / itemsPerPage);

  const currentItems = subCategory.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleSubcategoryClick = (id: string) => {
    navigate(`/subcategory/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-8 md:p-12 lg:p-20">
      <h2 className="text-light-yellow text-3xl sm:text-4xl md:text-5xl font-light font-Montserrat mb-6 sm:mb-8 md:mb-10">
        {category.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {isLoading ? (
          <>
            <ShimmerIndicator count={1} height={400} width={400} />
            <ShimmerIndicator count={1} height={400} width={400} />
          </>
        ) : (
          currentItems.map((subCategories) => (
            <SubcategoryCard
              key={subCategories.id}
              title={subCategories.title}
              description={subCategories.description}
              image={HeroImage}
              onClick={() => handleSubcategoryClick(subCategories.id)}
            />
          ))
        )}
      </div>

      {!isLoading && (
        <ReactPaginate
          className="text-light-yellow flex flex-row gap-5 text-center items-center justify-center pt-10"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageClassName="page"
          activeClassName="active"
          previousClassName="prev"
          nextClassName="next"
          breakClassName="break"
          disabledClassName="disabled"
        />
      )}
    </div>
  );
};

export default CategorySection;
