import React from "react";
import Phoenix from "../../assets/phoenix.jpg";

type MemberCardPropsTypes = {
  id: number;
  picture: string;
  Name: string;
  Position: string;
};

const MemberCard: React.FC<MemberCardPropsTypes> = ({
  id,
  picture,
  Name,
  Position,
}) => {
  return (
    <div className=" w-full md:w-2/3 md:flex md:justify-between px-10 py-5 items-center flex-col md:flex-row">
      <div className="flex  items-center w-full">
        <img src={picture} alt="" className="w-48 h-48 rounded-full" />
      </div>

      <div className="text-center">
        <h1 className="text-3xl">{Name}</h1>
        <p>{Position}</p>
      </div>
    </div>
  );
};

export default MemberCard;
