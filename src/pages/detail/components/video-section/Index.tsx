import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="  px-20">
     <div className="h-[50vh]">
     <ReactPlayer
        url={"https://www.youtube.com/watch?v=CpCN9lTFHc4"}
        width="100%"
        height="100%"
        controls={true}
        className="rounded-lg shadow-lg"
      />
     </div>
      <div>
        <p className="text-light-yellow text-5xl font-light font-Montserrat mt-5">
          {"Swimming 101"}
        </p>
        <p className="text-base  py-5 text-light-grey w-1/2">
          {
            "Cardiovascular training, often referred to as cardio, involves exercises that increase the heart rate and improve the efficiency of the cardiovascular system. There are various types of cardiovascular training, each offering unique benefits depending on the intensity, duration, and form of exercise"
          }
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
