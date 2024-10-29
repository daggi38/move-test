import useFetchDashboardStats from "../../../hooks/use-fetch-dashboard-stat";
import { homePageDescription, homePageDescriptionTitle } from "../../app-strings";
import SearchBar from "../search-bar/SearchBar";

const HomeHeroDescription = () => {
  const { dashboardStat } = useFetchDashboardStats();

  const dashboardStats = dashboardStat.map((stat, index) => (
    <div key={index} className="text-center lg:text-left">
      <p className="font-bold text-4xl lg:text-6xl">{stat.total_videos} +</p>
      <p>{stat.title} Videos</p>
    </div>
  ));

  return (
    <div className="relative grid grid-cols-1 xl:grid-cols-[2fr_1fr_2fr] -mt-16">
      <div className="xl:hidden w-full px-5 mb-4 flex items-center justify-center">
        <div className="w-full md:w-1/2">
          <SearchBar />
        </div>
      </div>

      <div className="h-[300px] bg-primary rounded-tr-3xl flex items-center justify-center px-10 lg:px-20">
        <div className="text-light-grey font-raleway flex flex-col gap-3 text-center lg:text-left">
          <p className="font-Montserrat font-semibold text-3xl">
          {homePageDescriptionTitle}
          </p>
          <p className="text-xl font-raleway">
         {homePageDescription}
          </p>
        </div>
      </div>

      <div className="hidden xl:flex h-[300px] flex-col gap-2 items-center">
        <div className="w-full px-5">
          <SearchBar />
        </div>
        <div className="h-[250px] bg-primary w-full"></div>
      </div>

      <div className="h-[300px] rounded-tl-3xl bg-primary flex items-center justify-center">
        <div className="text-light-grey font-raleway flex flex-row gap-6 lg:gap-10 text-xl lg:text-2xl font-light">
          {dashboardStats}
        </div>
      </div>
    </div>
  );
};

export default HomeHeroDescription;
