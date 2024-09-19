import React from "react";
import GetEntertainedCard from "../../../../common/components/cards/GetEntertainedCard";
import LiveArtImage from "../../../../assets/images/live-art.jpg";
import ChessImage from "../../../../assets/images/chess.jpg";
import PrankImage from "../../../../assets/images/pranks.jpg";
import OutdoorImage from "../../../../assets/images/outdoor-competition.jpg";

const GetEntertained = () => {
  const entertainmentItems = [
    { title: "Live art Performance", imageUrl: LiveArtImage },
    { title: "Pranks", imageUrl: PrankImage },
    { title: "Outdoor competition", imageUrl: OutdoorImage },
     { title: "Indoor competition", imageUrl: ChessImage },
    { title: "Live art Performance", imageUrl: ChessImage },
  ];

  const renderCards = () => {
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
            <div className="flex  flex-col gap-5">
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
          <div className="flex justify-center gap-5 pt-10 ">
          <div className="flex flex-col lg:flex-row  gap-5">
            <div className="h-[300px] ">
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
          <div className="flex  pt-10">
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
      <div className="flex flex-col md:flex-row justify-between items-center  ">
        <div className="">
         
          <p className="font-Montserrat text-4xl md:text-6xl text-light-yellow">
          Get Entertained
          </p>
          <p className="mt-2 font-raleway text-lg md:text-2xl text-light-grey">
          Engage, Enjoy, and Experience Entertainment Like Never Before
          </p>
        </div>
        <p className="text-light-yellow font-raleway text-base md:text-xl text-center font-light mt-5 lg:mt-0">
          View all entertainments
        </p>
      </div>
      {renderCards()}
    </div>
  );
};

export default GetEntertained;
