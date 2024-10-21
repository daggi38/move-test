import { useNavigate } from "react-router";
import SubcategoryCard from "../../../../common/components/cards/SubcatagoryCard";
import { SearchResult } from "../../../../models/search-results/search-results";
import { Key } from "react";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";

interface SearchResultProps {
  searchResults: SearchResult[];
  isLoading: boolean;
}

const SearchResultsSection: React.FC<SearchResultProps> = ({
  searchResults,
  isLoading,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (id: Key | null) => {
    navigate(`/series/${id}`);
  };

  if (isLoading) {
    return (
      <div className="px-5 lg-px-20 mt-10 gap-5">
        <ShimmerIndicator count={1} height={100} width={250} />
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <ShimmerIndicator count={1} height={400} width={400} />
          <ShimmerIndicator count={1} height={400} width={400} />
        </div>
      </div>
    );
  }

  const renderedSubcategories = searchResults.map((subcategory) => (
    <div key={subcategory.id} className="mb-6 p-4 rounded-lg shadow-md">
      <p className="font-Montserrat text-2xl md:text-6xl text-light-yellow pb-10">
        {subcategory.title}
      </p>
   

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 my-10">
        {subcategory.series?.length > 0 ? (
          subcategory.series.map((seriesItem) => (
            <SubcategoryCard
              key={seriesItem.id}
              description={seriesItem.description}
              image=""
              onClick={() => handleCardClick(seriesItem.id)}
              title={seriesItem.title}
            />
          ))
        ) : (
          <p>No Items Found.</p>
        )}
      </div>
    </div>
  ));

  
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-center">
        <p className="text-4xl md:text-5xl lg:text-6xl mb-4 font-Montserrat font-bold text-light-yellow mt-10">
          Search Results
        </p>
      </div>

      {/* Results Section */}
      <div className="p-4">{renderedSubcategories}</div>
    </div>
  );
};

export default SearchResultsSection;
