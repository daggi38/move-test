import FitnessCard from "../../../../common/components/cards/FItnessCard";
import WeightImage from "../../../../assets/images/fitness-weight.jpg";
import { useNavigate } from "react-router";

const FitnessSection = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex flex-col p-20">
      <p className="text-light-yellow text-5xl font-light font-Montserrat">
        FItness
      </p>

      <div className="flex gap-5 m-10">
        <div
          onClick={() => {
            navigate("/fitness-detail");
          }}
        >
          <FitnessCard
            description="Focuses on improving heart and lung health and 
Activities include treadmill running, cycling, rowing, stair climbing, and elliptical training.
"
            image={WeightImage}
            title="Cardiovascular Training"
          />
        </div>
      </div>
    </div>
  );
};

export default FitnessSection;
