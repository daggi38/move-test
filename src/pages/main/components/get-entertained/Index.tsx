import React from "react";
import GetEntertainedCard from "../../../../common/components/cards/GetEntertainedCard";
import LiveArtImage from "../../../../assets/images/live-art.jpg";
import ChessImage from "../../../../assets/images/chess.jpg";
import PrankImage from "../../../../assets/images/pranks.jpg";
import OutdoorImage from "../../../../assets/images/outdoor-competition.jpg";
import useFetchFeaturedCollection from "../../../../hooks/use-fetch-featured-collection";
import { Link } from "react-router-dom";
import useFetchEntertainmentSubCategories from "../../../../hooks/use-fetch-entertainment-subcategory";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";

const GetEntertained = () => {
  const { entertainmentFeature, isDataFetched, isBusy } =
    useFetchFeaturedCollection();
  const categoryId = entertainmentFeature?.category?.[0]?.id || "";
  const { entertainmentSubCategory } =
    useFetchEntertainmentSubCategories(categoryId);

  const isLoading = 
  !isDataFetched ||
    !entertainmentFeature ||
    !entertainmentFeature.category.length;

  const entertainmentItems = entertainmentSubCategory;

  const renderCards = () => {
    if (isLoading) {
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
                  title={entertainmentItems[0].title}
                  imageUrl={entertainmentItems[0].imageUrl}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  title={entertainmentItems[1].title}
                  imageUrl={entertainmentItems[1].imageUrl}
                />
              </div>
            </div>
            <div className="h-[605px]">
              <GetEntertainedCard
                title={entertainmentItems[2].title}
                imageUrl={entertainmentItems[2].imageUrl}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-[300px]">
                <GetEntertainedCard
                  title={entertainmentItems[3].title}
                  imageUrl={entertainmentItems[3].imageUrl}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  title={entertainmentItems[4].title}
                  imageUrl={entertainmentItems[4].imageUrl}
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
                  title={entertainmentItems[3].title}
                  imageUrl={entertainmentItems[3].imageUrl}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  title={entertainmentItems[2].title}
                  imageUrl={entertainmentItems[2].imageUrl}
                />
              </div>
            </div>
            <div className="h-[605px]">
              <GetEntertainedCard
                title={entertainmentItems[1].title}
                imageUrl={entertainmentItems[1].imageUrl}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-[605px]">
                <GetEntertainedCard
                  title={entertainmentItems[0].title}
                  imageUrl={entertainmentItems[0].imageUrl}
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
                  title={entertainmentItems[2].title}
                  imageUrl={entertainmentItems[2].imageUrl}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  title={entertainmentItems[1].title}
                  imageUrl={entertainmentItems[1].imageUrl}
                />
              </div>
            </div>
            <div className="h-[605px]">
              <GetEntertainedCard
                title={entertainmentItems[0].title}
                imageUrl={entertainmentItems[0].imageUrl}
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
                  title={entertainmentItems[1].title}
                  imageUrl={entertainmentItems[1].imageUrl}
                />
              </div>
              <div className="h-[300px]">
                <GetEntertainedCard
                  title={entertainmentItems[0].title}
                  imageUrl={entertainmentItems[0].imageUrl}
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
                title={entertainmentItems[0].title}
                imageUrl={entertainmentItems[0].imageUrl}
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
        {isLoading ? (
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

        {isLoading ? (
          <ShimmerIndicator count={1} height={100} width={300} />
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
