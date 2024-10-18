import { Key, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubcategoryCard from "../../../../common/components/cards/SubcatagoryCard";
import { Series } from "../../../../models/categories/categories";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselResponsiveSettings from "../../../../setup/carousel-setup/carousel-setup";

type SeriesSectionProps = {
  series: Series[];
  isLoading: boolean;
  tagItems: string[];
};

const ItemsSection: React.FC<SeriesSectionProps> = ({
  series,
  isLoading,
  tagItems,
}) => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState<string>("All");
  const [filteredSeries, setFilteredSeries] = useState<Series[]>([]);

  useEffect(() => {
    if (activeTag === "All") {
      setFilteredSeries(series);
    } else {
      const filtered = series.filter((item) =>
        item.tags.some((tag) => tag.title === activeTag)
      );
      setFilteredSeries(filtered);
    }
  }, [activeTag, series]);

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
  };

  const handleCardClick = (id: Key | null) => {
    navigate(`/series/${id}`);
  };

  
  const tagItemsList = ["All", ...tagItems].map((tag) => (
    <div key={tag}>
      <p
        className={`mx-2 px-4 sm:px-6 md:px-10 cursor-pointer py-2 text-center whitespace-nowrap text-white font-raleway font-light rounded-3xl transition-colors duration-300 text-lg sm:text-xl bg-primary ${
          activeTag === tag ? "border border-light-yellow" : ""
        }`}
        onClick={() => handleTagClick(tag)}
      >
        {tag}
      </p>
    </div>
  ));

  const seriesCards = filteredSeries.map((series: Series) => (
    <SubcategoryCard
      key={series.id}
      title={series.title}
      description={series.description}
      image={""}
      onClick={() => handleCardClick(series.id)}
    />
  ));

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 md:mt-20">
      <div className="flex justify-start text-left md:text-center">
        <div>
          <p className="text-light-yellow text-5xl font-light font-Montserrat mb-10">
            {"Series"}
          </p>
        </div>
      </div>

      {series.length ? (
        <Carousel responsive={carouselResponsiveSettings} infinite={false}>
          {tagItemsList}
        </Carousel>
      ) : (
        ""
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 my-10">
        {isLoading ? (
          <>
            <ShimmerIndicator count={1} height={400} width={400} />
            <ShimmerIndicator count={1} height={400} width={400} />
          </>
        ) : (
          seriesCards
        )}
      </div>
    </div>
  );
};

export default ItemsSection;
