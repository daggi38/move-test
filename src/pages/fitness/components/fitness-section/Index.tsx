
import CatagoryCard from "../../../../common/components/cards/CatagoryCard";

const FitnessSection = () => {
  return (
    <div className="h-[100vh] flex flex-col ">
      <p className="text-light-yellow text-5xl font-light font-Montserrat">
        Fitness
      </p>

      <div className="flex gap-5">
        <CatagoryCard />
      </div>
    </div>
  );
};

export default FitnessSection;
