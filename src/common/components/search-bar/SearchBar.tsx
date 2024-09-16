const SearchBar = () => {
  return (
    <div className="h-[50px] bg-gradient-to-r from-primary to-primary-light w-full rounded-full flex items-center justify-between  z-30 ">
      <input
        type="text"
        placeholder="What are you looking for ?"
        className="bg-transparent placeholder:text-light-yellow placeholder:font-raleway font-light  w-full ml-4"
      />
      <div className="h-full  bg-gradient-to-r from-light-yellow to-dark-yellow  flex items-center justify-center rounded-full">
        {" "}
        <p className="text-white  px-5">Search</p>
      </div>
    </div>
  );
};

export default SearchBar;
