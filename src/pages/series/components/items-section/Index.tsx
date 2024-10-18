import { Key } from "react";
import { useNavigate } from "react-router-dom";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";
import useFetchVideos from "../../../../hooks/use-fetch-videos";
import VideoCard from "../../../../common/components/cards/VideoCard";
import { VideoModel } from "../../../../models/video/video";

type SeriesSectionProps = {
  SeriesId: string;
  isLoading: boolean;
};

const ItemsSection: React.FC<SeriesSectionProps> = ({
  SeriesId,
 
}) => {
  const navigate = useNavigate();

  const handleCardClick = (id: Key | null ) => {
    navigate(`/detail/${id}`);
  };

  const { videoList, isBusy, hasVideos } = useFetchVideos(SeriesId);

  const videos = videoList.map((video: VideoModel) => (
    <VideoCard
      key={video.id}
      title={video.title}
      description={video.description}
      image={""}
      views={0}
      onClick={() => handleCardClick(video.id)}
    />
  ));

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 md:mt-20">
      <div className="flex justify-start text-left md:text-center">
        <div>
          <p className="text-light-yellow text-5xl font-light font-Montserrat mb-10">
            {"Videos"}
          </p>
        </div>
      </div>

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

      {!hasVideos && (
        <div className="text-center mt-10 text-light-grey font-Montserrat text-3xl py-10">
          No videos found for this series.
        </div>
      )}
    </div>
  );
};

export default ItemsSection;
