import { Link } from "react-router-dom";
import FitnessCardio from "../../../../assets/images/fitness-cardio.jpg";
import FitnessWeight from "../../../../assets/images/fitness-weight.jpg";
import FitnessProgramCard from "../../../../common/components/cards/FitnessProgram";
import useFetchFeaturedCollection from "../../../../hooks/use-fetch-featured-collection";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";
import useFetchFitnessSubCategories from "../../../../hooks/use-fetch-fitness-subcategory";

const FitnessProgram = () => {
  const {
   
    fitnessFeature,
    isDataFetched,
  } = useFetchFeaturedCollection();

  const categoryId = fitnessFeature?.category?.[0]?.id || "";
  const { fitnessSubCategory } = useFetchFitnessSubCategories(categoryId);

  const isLoading =
    !isDataFetched || !fitnessFeature || !fitnessFeature.category.length;


    
  return (
    <div className="bg-primary px-5 lg:px-20">
   
        <>
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between py-10 md:py-20 gap-5">
            {isLoading ? (
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

            {isLoading ? (
              <ShimmerIndicator count={2} height={300} width={300} />
            ) : (
              <div className="flex flex-col xl:flex-row gap-5 md:gap-10">
                <img
                  src={FitnessWeight}
                  alt="Fitness Weight"
                  className="w-full md:w-[300px] h-[200px] md:h-[250px] rounded-3xl"
                />
                <img
                  src={FitnessCardio}
                  alt="Fitness Cardio"
                  className="w-full md:w-[300px] h-[200px] md:h-[250px] rounded-3xl"
                />
              </div>
            )}
          </div>

          {/* Fitness Program Cards */}
          <div className="flex flex-col md:flex-row justify-around gap-10 pb-10">
            {isLoading
              ? Array(3).fill("").map((_, index) => (
                  <ShimmerIndicator
                    key={index}
                    count={1}
                    height={300}
                    width={350}
                 
                  />
                ))
              : fitnessSubCategory.slice(0, 3).map((subCategory) => (
                  <FitnessProgramCard
                    key={subCategory.id}
                    description={subCategory.description}
                    title={subCategory.title}
                  />
                ))}
          </div>

          {/* View all fitness programs link */}
          <Link key={categoryId} to={`/category/${categoryId}`}>
            <p className="text-light-yellow font-raleway text-lg md:text-xl text-center font-light pb-10">
              View all fitness programs
            </p>
          </Link>
        </>
      
    </div>
  );
};

export default FitnessProgram;
