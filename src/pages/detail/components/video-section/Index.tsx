// VideoSection.tsx
import React from "react";
import { VideoModel } from "../../../../models/video/video";

import useFetchVimeoLink from "../../../../hooks/use-fetch-vimeo-link";

interface EpisodeProps {
  episode: VideoModel;
  isLoading: boolean;
}
const vimeoAccessToken = import.meta.env.VITE_REACT_APP_SECRET_KEY;

const VideoSection: React.FC<EpisodeProps> = ({ episode, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
 

  const { vimeoLink, } = useFetchVimeoLink(
    vimeoAccessToken,
    episode.path
  );

  return (
    <div className="h-auto xl:h-[80vh] px-5 md:px-20 mt-10">
      <div className="h-[50vh] ">
        <iframe
          src={vimeoLink}
          width="100%"
          height="360"
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        />
      </div>
      <div>
        <p className="font-Montserrat text-3xl xl md:text-6xl mt-3 text-light-yellow">
          {episode.title}
        </p>
        <p className="text-base py-5 text-light-grey w-full md:w-1/2">
          {episode.description}
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
