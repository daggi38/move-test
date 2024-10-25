import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SearchFormData = {
  title: string;
};

const SearchBar: React.FC = () => {
  const { register, handleSubmit } = useForm<SearchFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: SearchFormData) => {
    navigate(`/search-results?q=${data.title}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[50px] bg-gradient-to-r from-primary to-primary-light w-full rounded-full flex items-center justify-between z-30"
    >
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-transparent placeholder:text-light-yellow text-light-grey placeholder:font-raleway font-light w-full ml-4 placeholder:text-sm md:placeholder:text-lg outline-none"
        {...register("title", { required: true })} 
      />
      <button
        type="submit"
        className="h-full bg-gradient-to-r from-light-yellow to-dark-yellow flex items-center justify-center rounded-full"
      >
        <p className="text-white px-5">Search</p>
      </button>
    </form>
  );
};

export default SearchBar;
