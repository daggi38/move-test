import EntertainmenCard from "../../../../common/components/cards/EntertainmentCard";
import LiveArt from "../../../../assets/images/live-art.jpg";
import { useNavigate } from "react-router";
const EntertainmentSection = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex flex-col p-20  ">
      <p className="text-light-yellow text-5xl font-light font-Montserrat">
        Entertainment
      </p>

      <div className="flex gap-5 mt-10">
        <div
          onClick={() => {
            navigate("/entertainment-detail");
          }}
        >
          <EntertainmenCard
            description="Focuses on improving heart and lung health and .Activities include treadmill running, cycling, rowing, stair climbing, and elliptical training."
            title="Live Art Performance"
            image={LiveArt}
          />
        </div>
        <EntertainmenCard
          description="Focuses on improving heart and lung health and .Activities include treadmill running, cycling, rowing, stair climbing, and elliptical training."
          title="Live Art Performance"
          image={LiveArt}
        />
        <EntertainmenCard
          description="Focuses on improving heart and lung health and .Activities include treadmill running, cycling, rowing, stair climbing, and elliptical training."
          title="Live Art Performance"
          image={LiveArt}
        />
      </div>
    </div>
  );
};

export default EntertainmentSection;
