import React from "react";
import VideoCard from "../../../../common/components/cards/VideoCard";

const RecommendationSection = () => {
  return (
    <div className="px-5 md:px-20">
      <p className="font-Montserrat text-3xl md:text-6xl text-light-yellow">
        {"Recommendation"}
      </p>
      <div className="h-[50vh ]">
      <div className="mt-10">
        <VideoCard/>
      </div>
      </div>
    </div>
  );
};

export default RecommendationSection;
