import WeightLift from "../../../assets/images/fitness-weight.jpg";

const CatagoryCard = () => {
  return (
    <div className="bg-primary w-[395px] rounded-2xl  ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-light-yellow text-4xl font-normal p-5 text-center font-Montserrat">
          Cardiovascular Training
        </p>
        <p className="text-light-grey text-base text-center font-raleway">
          Focuses on improving heart and lung health and Activities include
          treadmill running, cycling, rowing, stair climbing, and elliptical
          training.
        </p>
        <img src={WeightLift} alt="" className="w-[340px] h-[244px] p-5 rounded-[50px] " />
      </div>
    </div>
  );
};

export default CatagoryCard;
