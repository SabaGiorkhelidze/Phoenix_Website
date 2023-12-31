import { CardData } from "../../Data/CardsData";
import Card from "./Card";
import TestCard from "./ItemCard";
const CardLayout = () => {
  return (
    <div className="w-full bg-[#d7ded9] py-8">
      <div className="w-full flex justify-center items-center py-3">
        <h1 className=" ">კატალოგი</h1>{" "}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 sm:gap-4 md:gap-3 justify-items-center mt-6">
        {CardData.map((card) => (
          <TestCard
            key={card.id}
            id={card.id}
            name={card.name}
            picture={card.picture}
            playerAmount={card.playerAmount}
            averageTime={card.averageTime}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
