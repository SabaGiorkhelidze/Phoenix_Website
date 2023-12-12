import React from "react";
import { useParams } from "react-router-dom";
import { CardData } from "../Data/CardsData";
import armosulaDetails from "../assets/armosulaDetails.jpg";
type CardDataTypes = {
  id: number;
  picture: string;
  name: string;
  descriptionOne: string;
  descriptionTwo: string;
  playerAmount: number;
  averageTime: string;
  price: number;
};

type ParamTypes = {
  id: string;
};

const DetailsPage = () => {
  const { id } = useParams<ParamTypes>();

  const parsedId: number = parseInt(id, 10);
  const card = CardData.find((item: CardDataTypes) => item.id === parsedId);

  if (!card) {
    return <div>Card not found.</div>;
  }

  return (
    <div className="my-14 flex justify-center items-center">
      <div className="flex justify-center items-center flex-col w-full ">
        <img src={armosulaDetails} alt="" />

        <div className="flex flex-col-reverse md:flex md:flex-row md:w-full md:my-5">
          <div className=" my-0 md:w-2/3  flex justify-center items-center">
            <img
              src={card.rules_pic}
              alt=""
              className="w-full h-full md:w-6/7 md:relative md:left-10 rounded-3xl md:h-full px-5"
            />
          </div>
          <div className="md:w-full">
            <div className="text-start px-10  md:flex md:justify-start md:flex-col md:w-full gap-3">
              <h1 className="text-3xl font-bold text-[#000060] my-2">
                მოკლე აღწერა
              </h1>
              <h1 className="">{card.descriptionOne}</h1>
              <h1>{card.descriptionTwo}</h1>
              <h1 className="font-normal">
                მოთამაშეების რაოდენობა: {card.playerAmount}+
              </h1>
              <h1 className="font-normal">
                საშუალო დრო: {card.averageTime} წთ.
              </h1>
            </div>
          </div>
        </div>

        <div className="text-start items-center flex justify-center flex-col md:flex-row-reverse my-5 px-3 md:px-10 md:flex md md:w-full gap-3 ">
          <div className="">
            <h1 className="text-[#000060] text-3xl font-bold text-center my-4">
              წესები
            </h1>
            <h1>{card.rules}</h1>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default DetailsPage;
