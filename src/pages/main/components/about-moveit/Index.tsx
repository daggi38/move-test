import ImageOne from "../../../../assets/images/image-one.png";
import ImageTwo from "../../../../assets/images/image-two.png";

const About = () => {
  return (
    <div className="mt-10 p-5 md:p-20">
      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="text-light-grey text-center md:text-left">
          <p className="text-[32px] lg:text-[48px] font-Montserrat">
            <p>Get Moving. Get Fit.</p>
            <p> Get Strong</p>
          </p>
          <p className="mt-3 font-raleway text-sm md:text-base ">
            MoveIt is a community-focused gym committed to your fitness journey.
            With top-notch facilities and expert trainers, we help you move,
            sweat, and transform. Join us today! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. A voluptates perferendis totam quidem
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img src={ImageOne} alt="Image One" className="w-full max-w-[400px]" />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-20">
        <div className="text-light-grey text-center md:text-left">
          <p className="text-[32px] lg:text-[48px] font-Montserrat">
            <p>Step Up, Shine,</p>
            <p>Entertain, and Compete</p>
          </p>
          <p className="mt-5 font-raleway text-sm md:text-base">
            MoveIt is a community-focused gym committed to your fitness journey.
            With top-notch facilities and expert trainers, we help you move,
            sweat, and transform. Join us today! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. A voluptates perferendis totam quidem
            dolorum saepe ab sit officia assumenda quisquam, quod amet corporis,
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img src={ImageTwo} alt="Image Two" className="w-full max-w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
