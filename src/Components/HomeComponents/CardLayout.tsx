import { CardData } from "../../Data/CardsData";
import Card from "./Card";
const CardLayout = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="w-full flex justify-center items-center py-3"><h1 className=" ">კატალოგი</h1> </div>
      {CardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          picture={card.picture}
          descriptionOne={card.descriptionOne}
          descriptionTwo={card.descriptionTwo}
          playerAmount={card.playerAmount}
          averageTime={card.averageTime}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default CardLayout;
