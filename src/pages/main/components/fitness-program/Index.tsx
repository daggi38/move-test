import FitnessCardio from "../../../../assets/images/fitness-cardio.jpg";
import FitnessWeight from "../../../../assets/images/fitness-weight.jpg";
import FitnessProgramCard from "../../../../common/components/cards/FitnessProgram";

const FitnessProgram = () => {
  return (
    <div className="bg-primary px-5 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-10 md:py-20 gap-5">
        <div className="text-center md:text-left">
          <p className="font-Montserrat text-4xl md:text-6xl text-light-yellow">
            Fitness Program
          </p>
          <p className="mt-2 font-raleway text-lg md:text-2xl text-light-grey">
            Get Moving with Our Variety of Fitness Classes
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <img
            src={FitnessWeight}
            alt="Fitness Weight"
            className="w-full md:w-[350px] h-[200px] md:h-[250px] rounded-3xl"
          />
          <img
            src={FitnessCardio}
            alt="Fitness Cardio"
            className="w-full md:w-[350px] h-[200px] md:h-[250px] rounded-3xl"
          />
        </div>
      </div>

      {/* Fitness Program Cards */}
      <div className="flex flex-col md:flex-row justify-around gap-10 pb-10">
        <FitnessProgramCard
          description="We help you build muscle with expert-guided strength training programs designed for all levels. Our trainers provide personalized workouts and nutrition tips to ensure you gain muscle safely and effectively. !"
          title="Muscle gain"
        />
        <FitnessProgramCard
          description="Our weight loss programs combine HIIT, cardio, and expert nutritional guidance to help you burn fat and achieve lasting results. Start your journey to a healthier, fitter you today and see the difference in your body and lifestyle!"
          title="Weight Loss"
        />
        <FitnessProgramCard
          description="Our core strengthening programs focus on building a strong, stable core with targeted exercises like planks, leg raises, and Russian twists. Strengthen your core to improve balance, posture, and overall fitness. Start today to build a solid foundation for a better you!"
          title="Core Strengthening"
        />
      </div>


      <p className="text-light-yellow font-raleway text-lg md:text-xl text-center font-light pb-10">
        View all fitness programs
      </p>
    </div>
  );
};

export default FitnessProgram;
