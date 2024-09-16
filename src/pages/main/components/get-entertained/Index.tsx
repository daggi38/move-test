import React from "react";
import GetEntertainedCard from "../../../../common/components/cards/GetEntertainedCard";
import LiveArtImage from "../../../../assets/images/live-art.jpg";

import ChessImage from "../../../../assets/images/chess.jpg";
import PrankImage from "../../../../assets//images/pranks.jpg";
import OutdoorImage from "../../../../assets/images/outdoor-competition.jpg";


const GetEntertained = () => {
  return (
    <div className="p-20">
      <div className="flex justify-between items-center ">
        <div>
          <p className="font-Montserrat text-6xl text-light-yellow">
            Get Entertained
          </p>
          <p className="mt-2 font-raleway text-2xl text-light-grey ">
            Engage, Enjoy, and Experience Entertainment Like Never Before
          </p>
        </div>
        <p className="text-light-yellow font-raleway text-xl text-center font-light ">
          View all entertaiments
        </p>
      </div>
      <div className="flex justify-center  flex-row gap-5 pt-10">
        <div className="flex flex-col gap-5">
          <div className="h-[300px]">
            <GetEntertainedCard
              title="Live art Performance"
              imageUrl={LiveArtImage}
            />
          </div>
          <div className="h-[300px]">
            <GetEntertainedCard
              title="Pranks"
              imageUrl={PrankImage}
            />
          </div>
        </div>
        <div className="h-[605px]">
          {" "}
          <GetEntertainedCard
            title="Outdoor competition"
            imageUrl={OutdoorImage}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="h-[300px]">
            <GetEntertainedCard
              title="Indoor competition"
              imageUrl={ChessImage}
            />
          </div>
          <div className="h-[300px]">
            <GetEntertainedCard
              title="Live art Performance"
              imageUrl={ChessImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetEntertained;
