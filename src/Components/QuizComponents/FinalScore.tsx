import { useContext } from "react";
import { QuizContext } from "../../Context/QuizContext";
import { motion } from "framer-motion";
const FinalScore = () => {
  const { score, setCurrentQuestionIndex } = useContext(QuizContext);
  return (
    <div className="my-32 flex flex-col justify-center items-center text-3xl">
      <h1>You've finished quiz!</h1>
      <h1>Final Score: {score}</h1>
      <motion.button
        whileHover={{ scale: 1.03 }}
        className="border-2 border-blue-800 px-12 text-2xl  py-3 cursor-pointer rounded-full hover:bg-blue-800 hover:text-white"
        onClick={() => setCurrentQuestionIndex(0)}
      >
        Try Again
      </motion.button>
    </div>
  );
};

export default FinalScore;
