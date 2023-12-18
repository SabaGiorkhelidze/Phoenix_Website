import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type CardPropsType = {
  id: number;
  picture: string;
  name: string;
  descriptionOne: string;
  descriptionTwo: string;
  playerAmount: number;
  averageTime: string;
  price: number;
};

const Card = ({
  id,
  picture,
  name,
  descriptionOne,
  descriptionTwo,
  price,
  averageTime,
  playerAmount,
}: CardPropsType) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col items-center my-4">
        <div className=" flex flex-col md:flex-row md:mx-44">
          <div className="md:self-center flex justify-start mx-8 md:mx-0 md:justify-center my-2">
            <img
              src={picture}
              alt=""
              className="w-[249px] h-[177px] md:w-[418px] md:h-[297px]"
            />
          </div>
          <div className="self-start px-4 py-2 md:self-center">
            <div className="mx-5">
              <h1 className="text-[#000060] font-bold text-xl md:text-4xl">
                {name}
              </h1>
            </div>
            <div className="mx-5">
              <div className="my-2 text-start">
                <h3 className="text-[#000060] font-normal ">{descriptionOne}</h3>
              </div>
              <div className="my-2 text-start">
                <h3 className="text-[#000060] font-normal">{descriptionTwo}</h3>
              </div>
              <div className=" md:px-0 text-start">
                <h3 className="text-[#000060] font-normal">
                  მოთამაშეების რაოდენობა: {playerAmount}+
                </h3>
              </div>
              <div className="text-start">
                <h3 className="text-[#000060] font-normal">
                  საშუალო დრო: {averageTime} წთ
                </h3>
              </div>
              <div className="text-start">
                <h3 className="text-[#000060]">ფასი: {price} ლარი</h3>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="mx-5 ">
              <button
                onClick={() => {
                  navigate(`/game/${id}`);
                }}
                className="bg-[#000060] w-full px-5 h-10 rounded-md my-3 text-white"
              >
                დეტალურად
              </button>
            </motion.div>
          </div>
        </div>
        <div className="w-[80%] border border-black mx-20 my-10"></div>
      </div>
    </>
  );
};

export default Card;
