import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import RecommendationSection from "./components/recommendation-section/Index";
import VideoSection from "./components/video-section/Index";



const Detail = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <VideoSection/>
      <RecommendationSection/>
     
      <Footer />
    </div>
  );
};

export default Detail;
