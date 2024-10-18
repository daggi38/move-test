import React from "react";
import ReactPlayer from "react-player";
import { VideoModel } from "../../../../models/video/video";


interface EpisodeProps {
  episode: VideoModel;
  isLoading:boolean
}

const VideoSection: React.FC<EpisodeProps> = ({ episode ,isLoading}) => {
  return (
    <div className=" h-auto xl:h-[100vh] px-5 md:px-20">
      <div className="flex items-center justify-center">
        <ReactPlayer
          url={episode.path}
          width="70%"
          height="100%"
          controls={true}
          className="rounded-lg shadow-lg"
          
        />
      </div>
      <div>
        <p className="font-Montserrat text-3xl xl md:text-6xl mt-3 text-light-yellow">
          {episode.title}
        </p>
        <p className="text-base  py-5 text-light-grey w-full md:w-1/2">
          {
            episode.description
          }
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
