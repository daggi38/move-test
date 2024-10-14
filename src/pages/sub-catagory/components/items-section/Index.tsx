import { Key } from "react";
import { useNavigate } from "react-router-dom";
import SubcategoryCard from "../../../../common/components/cards/SubcatagoryCard";
import { Series } from "../../../../models/categories/categories";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";

type SeriesSectionProps = {
  series: Series;
  isLoading: boolean;
};

const ItemsSection: React.FC<SeriesSectionProps> = ({ series, isLoading }) => {
  const navigate = useNavigate();

  const handleCardClick = (id: Key | null | undefined) => {
    navigate(`/series/${id}`);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 md:mt-20">
      <div className="flex justify-start text-left md:text-center">
        <div>
          <p className="text-light-yellow text-5xl font-light font-Montserrat mb-10">
            {"Series"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 ">
        {isLoading ? (
          <>
            <ShimmerIndicator count={1} height={400} width={400} />
            <ShimmerIndicator count={1} height={400} width={400} />
          </>
        ) : (
          series.map((series: Series) => (
            <SubcategoryCard
              key={series.id}
              title={series.title}
              description={series.description}
              image={""}
              onClick={() => handleCardClick(series.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemsSection;
