import { useContext } from "react";
import { QuizContext } from "../../Context/QuizContext";

const FinalScore = () => {
  const { score } = useContext(QuizContext);
  return (
    <div className="my-32 flex flex-col justify-center items-center text-3xl">
      <h1>You've finished quiz!</h1>
      <h1>Final Score: {score}</h1>
    </div>
  );
};

export default FinalScore;
