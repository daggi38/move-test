import React from "react";
import VideoCard from "../../../../common/components/cards/VideoCard";

const RecommendationSection = () => {
  return (
    <div className="px-20">
      <p className="text-light-yellow text-5xl font-light font-Montserrat">
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
