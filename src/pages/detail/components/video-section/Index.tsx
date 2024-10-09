import React from "react";
import ReactPlayer from "react-player";
import meet from "../../../../assets/images/meet.mp4"

const VideoSection = () => {
  return (
    <div className="  px-5 md:px-20">
     <div className="h-[50vh]">
     <ReactPlayer
        url={meet}
        width="100%"
        height="100%"
        controls={true}
        className="rounded-lg shadow-lg"
      />
     </div>
      <div>
      <p className="font-Montserrat text-3xl xl md:text-6xl mt-3 text-light-yellow">
          {"Swimming 101"}
        </p>
        <p className="text-base  py-5 text-light-grey w-full md:w-1/2">
          {
            "Cardiovascular training, often referred to as cardio, involves exercises that increase the heart rate and improve the efficiency of the cardiovascular system. There are various types of cardiovascular training, each offering unique benefits depending on the intensity, duration, and form of exercise"
          }
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
