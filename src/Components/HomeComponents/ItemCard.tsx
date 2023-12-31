import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
type CardPropsType = {
  id: number;
  picture: string;
  name: string;
  playerAmount: number;
  averageTime: string;
  price: number;
};

const ItemCard = ({
  id,
  picture,
  name,
  playerAmount,
  averageTime,
  price,
}: CardPropsType) => {
  const navigate = useNavigate();

  return (
    <div className=" mx-8 flex justify-center flex-col w-80 rounded-lg shadow-2xl">
      <div>
        <img src={picture} alt="" className="" />
      </div>
      <div className=" relative bottom-5 h-full z-10  bg-white rounded-t-2xl flex justify-center items-center flex-col py-5">
        {/* header */}
        <div className="pb-3">
          <h1>{name}</h1>
        </div>
        {/* info */}
        <div className="flex flex-col items-center  ">
          <h4>{playerAmount}+ ადამიანი </h4>
          <h4>{averageTime} წთ </h4>
          <h4>{price}₾ </h4>
        </div>
      </div>
      {/* btn */}
      <motion.div whileHover={{ scale: 1.02 }} className="w-full  z-20 relative bottom-7">
        <button
          className="bg-[#000060] w-full rounded-t-xl py-5 text-white"
          onClick={() => {
            navigate(`/game/${id}`);
          }}
        >
          დეტალები
        </button>
      </motion.div>
    </div>
  );
};

export default ItemCard;
