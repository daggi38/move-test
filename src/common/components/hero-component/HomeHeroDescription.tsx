import SearchBar from "../search-bar/SearchBar";

const HomeHeroDescription = () => {
  return (
    <div className="relative grid grid-cols-[2fr_1fr_2fr] -mt-16">
      <div className="h-[300px] bg-primary rounded-t-3xl flex items-center justify-center px-20">
        <div className="text-light-grey font-raleway flex flex-col gap-3">
          <p className="font-Montserrat font-semibold text-3xl">
            <span>Stay Fit, Stay Entertained</span>
          </p>
          <p className="text-xl font-raleway">
            Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod
            tempor incididunt ut lab Lorem ipsum dolor sit amet, consectetur
            adipis elit, sed do eiusmod tempor incididunt ut lab
          </p>
        </div>
      </div>
      <div className="h-[300px] flex flex-col gap-2 items-center">
        <div className="w-full px-5">
          <SearchBar />
        </div>
        <div className="h-[250px] bg-primary w-full"></div>
      </div>
      <div className="h-[300px] rounded-t-3xl bg-primary flex items-center justify-center">
        <div className="text-light-grey font-raleway flex flex-row gap-10 text-2xl font-light">
          <div>
            <p className="font-bold text-6xl">100 +</p>
            <p>Fitness Videos</p>
          </div>
          <div>
            <p className="font-bold text-6xl">200 +</p>
            <p>Entertainment Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroDescription;
