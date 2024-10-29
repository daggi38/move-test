import GetEntertainedCard from "../../../../common/components/cards/GetEntertainedCard";
import useFetchFeaturedCollection from "../../../../hooks/use-fetch-featured-collection";
import { Link, useNavigate } from "react-router-dom";
import useFetchEntertainmentSubCategories from "../../../../hooks/use-fetch-entertainment-subcategory";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";

const GetEntertained = () => {
  const navigate = useNavigate();
  const { entertainmentFeature } = useFetchFeaturedCollection();
  const categoryId = entertainmentFeature?.category?.[0]?.id || "";
  const { entertainmentSubCategory, isBusy } =
    useFetchEntertainmentSubCategories(categoryId);

  const entertainmentItems = entertainmentSubCategory.slice(0, 5);

  const handleSubcategoryClick = (id: string) => {
    navigate(`/subcategory/${id}`);
  };

  const renderCards = () => {
    if (isBusy) {
      return (
        <div className="flex justify-center gap-5 pt-10 flex-col lg:flex-row">
          <div className="flex flex-col gap-5">
            <ShimmerIndicator count={2} height={300} width={300} />
            <ShimmerIndicator count={2} height={300} width={300} />
          </div>
          <ShimmerIndicator count={1} height={605} width={300} />
        </div>
      );
    }

    switch (entertainmentItems.length) {
      case 5:
        return (
          <div className="flex justify-center gap-5 pt-10 flex-col lg:flex-row">
            <div className="flex flex-col gap-5">
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[0].id)
                  }
                  title={entertainmentItems[0].title}
                  imageUrl={entertainmentItems[0].images[0]?.path || ""}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[1].id)
                  }
                  title={entertainmentItems[1].title}
                  imageUrl={entertainmentItems[1].images[0]?.path || ""}
                />
              </div>
            </div>
            <div className="h-[605px]">
              <GetEntertainedCard
                onClick={() => handleSubcategoryClick(entertainmentItems[2].id)}
                title={entertainmentItems[2].title}
                imageUrl={entertainmentItems[2].images[0]?.path || ""}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[3].id)
                  }
                  title={entertainmentItems[3].title}
                  imageUrl={entertainmentItems[3].images[0]?.path || ""}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[4].id)
                  }
                  title={entertainmentItems[4].title}
                  imageUrl={entertainmentItems[4].images[0]?.path || ""}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex justify-center gap-5 pt-10 flex-col lg:flex-row">
            <div className="flex flex-col gap-5">
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[3].id)
                  }
                  title={entertainmentItems[3].title}
                  imageUrl={entertainmentItems[3].images[0]?.path || ""}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[2].id)
                  }
                  title={entertainmentItems[2].title}
                  imageUrl={entertainmentItems[2].images[0]?.path || ""}
                />
              </div>
            </div>
            <div className="h-[605px]">
              <GetEntertainedCard
                onClick={() => handleSubcategoryClick(entertainmentItems[1].id)}
                title={entertainmentItems[1].title}
                imageUrl={entertainmentItems[1].images[0]?.path || ""}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-[605px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[0].id)
                  }
                  title={entertainmentItems[0].title}
                  imageUrl={entertainmentItems[0].images[0]?.path || ""}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex justify-center gap-5 pt-10 flex-col lg:flex-row">
            <div className="flex flex-col gap-5">
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[2].id)
                  }
                  title={entertainmentItems[2].title}
                  imageUrl={entertainmentItems[2].images[0]?.path || ""}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[1].id)
                  }
                  title={entertainmentItems[1].title}
                  imageUrl={entertainmentItems[1].images[0]?.path || ""}
                />
              </div>
            </div>
            <div className="h-[605px]">
              <GetEntertainedCard
                onClick={() => handleSubcategoryClick(entertainmentItems[0].id)}
                title={entertainmentItems[0].title}
                imageUrl={entertainmentItems[0].images[0]?.path || ""}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex justify-center gap-5 pt-10">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[1].id)
                  }
                  title={entertainmentItems[1].title}
                  imageUrl={entertainmentItems[1].images[0]?.path || ""}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  onClick={() =>
                    handleSubcategoryClick(entertainmentItems[0].id)
                  }
                  title={entertainmentItems[0].title}
                  imageUrl={entertainmentItems[0].images[0]?.path || ""}
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex pt-10">
            <div className="h-[300px] w-1/2">
              <GetEntertainedCard
                onClick={() => handleSubcategoryClick(entertainmentItems[0].id)}
                title={entertainmentItems[0].title}
                imageUrl={entertainmentItems[0].images[0]?.path || ""}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="md:p-20 p-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {isBusy ? (
          <div>
            <ShimmerIndicator count={1} height={100} width={400} />
          </div>
        ) : (
          <div className="text-center md:text-left">
            <p className="font-Montserrat text-4xl md:text-6xl text-light-yellow">
              {entertainmentFeature.title}
            </p>
            <p className="mt-2 font-raleway text-lg md:text-2xl text-light-grey">
              {entertainmentFeature.description}
            </p>
          </div>
        )}

        {isBusy ? (
          <p className="text-light-yellow font-raleway text-lg md:text-xl text-center font-light pb-10">
            View all entertainments
          </p>
        ) : (
          <Link
            key={entertainmentFeature.category[0].id}
            to={`/category/${entertainmentFeature.category[0].id}`}
          >
            <p className="text-light-yellow font-raleway text-lg md:text-xl text-center font-light pb-10">
              View all entertainments
            </p>
          </Link>
        )}
      </div>
      {renderCards()}
    </div>
  );
};

export default GetEntertained;
