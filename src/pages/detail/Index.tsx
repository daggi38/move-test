import { useParams } from "react-router";
import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import RecommendationSection from "./components/recommendation-section/Index";
import VideoSection from "./components/video-section/Index";
import useFetchEpisode from "../../hooks/use-fetch-episode";

const Detail = () => {
  const { id } = useParams<{ id?: string }>();

  const { episode } = useFetchEpisode(id || "");


  
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <VideoSection episode={episode} isLoading={false} />
      <RecommendationSection episode={episode} isLoading={false} />

      <Footer />
    </div>
  );
};

export default Detail;
