import React from "react";
import { VideoModel } from "../../../../models/video/video";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator"; // Assuming you have a shimmer component
import useFetchVimeoLink from "../../../../hooks/use-fetch-vimeo-link";
import { ClipLoader } from "react-spinners";

interface EpisodeProps {
  episode: VideoModel;
  isLoading: boolean;
}
const vimeoAccessToken = import.meta.env.VITE_REACT_APP_SECRET_KEY;

const VideoSection: React.FC<EpisodeProps> = ({ episode }) => {
  const { vimeoLink, isBusy } = useFetchVimeoLink(
    vimeoAccessToken,
    episode.path
  );

  return (
    <div className="h-auto  px-5 md:px-20 mt-10">
      <div className="h-[50vh]">
        {isBusy ? (
          <div className="flex items-center justify-center">
            <div className="w-[100vh] h-[50vh] bg-primary flex items-center justify-center">
              <ClipLoader
                color="white"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </div>
        ) : (
          <iframe
            src={vimeoLink}
            width="100%"
            height="360"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          />
        )}
      </div>
      <div>
        {isBusy ? (
          <div className="mt-5">
            <ShimmerIndicator count={1} height={40} width={300} />
            <ShimmerIndicator
              count={1}
              height={20}
              width={600}
              className="mt-2"
            />
          </div>
        ) : (
          <>
            <p className="font-Montserrat text-3xl xl md:text-6xl mt-14 text-light-yellow">
              {episode.title}
            </p>
            <p
              className="text-base py-5 text-light-grey w-full md:w-1/2"
              dangerouslySetInnerHTML={{ __html: episode.description }}
            ></p>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
