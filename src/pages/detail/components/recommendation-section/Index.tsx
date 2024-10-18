import React, { Key } from "react";
import VideoCard from "../../../../common/components/cards/VideoCard";
import { VideoModel } from "../../../../models/video/video";
import useFetchVideos from "../../../../hooks/use-fetch-videos";
import { useNavigate, useParams } from "react-router";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";

interface EpisodeProps {
  episode: VideoModel;
  isLoading: boolean;
}

const RecommendationSection: React.FC<EpisodeProps> = ({
  episode,
  isLoading,
}) => {
  const { videoList, hasVideos, isBusy } = useFetchVideos(episode.series_id);
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const handleCardClick = (videoId: Key | null | undefined) => {
    if (id === videoId) {
      return;
    }

    navigate(`/detail/${videoId}`);
  };

  const videos = videoList.map((video: VideoModel) => (
    <VideoCard
      episode={video.episode.toString()}
      key={video.id}
      title={video.title}
      description={video.description}
      image={""}
      views={0}
      onClick={() => handleCardClick(video.id)}
      isVideoDisplayed={id === video.id}
    />
  ));

  return (
    <div className="px-5 md:px-20">
      <p className="font-Montserrat text-3xl md:text-6xl text-light-yellow pb-10">
        {"Episodes"}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10">
        {isBusy ? (
          <>
            <ShimmerIndicator count={1} height={400} width={400} />
            <ShimmerIndicator count={1} height={400} width={400} />
          </>
        ) : (
          hasVideos && videos
        )}
      </div>
    </div>
  );
};

export default RecommendationSection;
