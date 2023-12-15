import MemberCard from "./MemberCard";
import { TeamData } from "../../Data/TeamData";

const TeamComponent = () => {
  return (
    <div className="py-6">
      <div className="w-full my-5">
        <h1 className="text-center text-4xl text-[#000060]">ჩვენი გუნდი</h1>
      </div>

      <div className="w-full flex flex-col justify-around items-center px-2 gap-5 md:flex-row md:items-center">
        {TeamData.map((member) => (
          <MemberCard
            key={member.id}
            id={member.id}
            picture={member.picture}
            Name={member.Name}
            Position={member.Position}
          ></MemberCard>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;
