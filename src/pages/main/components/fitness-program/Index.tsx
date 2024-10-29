import { Link, useNavigate } from "react-router-dom";

import FitnessProgramCard from "../../../../common/components/cards/FitnessProgram";
import useFetchFeaturedCollection from "../../../../hooks/use-fetch-featured-collection";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";
import useFetchFitnessSubCategories from "../../../../hooks/use-fetch-fitness-subcategory";

const FitnessProgram = () => {
  const { fitnessFeature, } = useFetchFeaturedCollection();
  const navigate = useNavigate();

  const categoryId = fitnessFeature?.category?.[0]?.id || "";
  const { fitnessSubCategory, isBusy } =
    useFetchFitnessSubCategories(categoryId);

  const handleSubcategoryClick = (id: string) => {
    navigate(`/subcategory/${id}`);
  };

  return (
    <div className="bg-primary px-5 lg:px-20">
      <>
        <div className="flex flex-col lg:flex-row items-center justify-between py-10 md:py-20 gap-5">
          {isBusy ? (
            <div>
              <ShimmerIndicator count={1} height={100} width={400} />
              <ShimmerIndicator count={1} height={100} width={400} />
            </div>
          ) : (
            <div className="text-center md:text-left">
              <p className="font-Montserrat text-4xl md:text-6xl text-light-yellow">
                {fitnessFeature.title}
              </p>
              <p className="mt-2 font-raleway text-lg md:text-2xl text-light-grey">
                {fitnessFeature.description}
              </p>
            </div>
          )}

          {isBusy ? (
            <ShimmerIndicator count={2} height={300} width={300} />
          ) : (
            <div className="flex flex-col xl:flex-row gap-5 md:gap-10">
              {fitnessFeature.images.map((image, index) => (
                <img
                  key={index}
                  src={image.path}
                  alt={`Fitness Image ${index + 1}`}
                  className="w-full md:w-[300px] h-[200px] md:h-[250px] rounded-3xl"
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-around gap-10 pb-10">
          {isBusy
            ? Array(3)
                .fill("")
                .map((_, index) => (
                  <ShimmerIndicator
                    key={index}
                    count={1}
                    height={300}
                    width={350}
                  />
                ))
            : fitnessSubCategory.slice(0, 3).map((subCategory) => (
                <FitnessProgramCard
                  onClick={() => {
                    handleSubcategoryClick(subCategory.id);
                  }}
                  key={subCategory.id}
                  description={subCategory.short_desc}
                  title={subCategory.title}
                />
              ))}
        </div>

        {isBusy ? (
          <p className="text-light-yellow font-raleway text-lg md:text-xl text-center font-light pb-10">
            View all fitness programs
          </p>
        ) : (
          <Link key={categoryId} to={`/category/${categoryId}`}>
            <p className="text-light-yellow font-raleway text-lg md:text-xl text-center font-light pb-10">
              View all fitness programs
            </p>
          </Link>
        )}
      </>
    </div>
  );
};

export default FitnessProgram;
