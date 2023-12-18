import { useContext } from "react";
import { QuizContext } from "../../Context/QuizContext";
import { motion } from "framer-motion";

const QuizStartGame = () => {
  const { setStartQuiz } = useContext(QuizContext);
  return (
    <div className="text-xl flex justify-between h-full gap-10   items-center flex-col ">
      {/* <div> */}
      <h1>Start Game?</h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="border-2 border-blue-800 px-16  py-3 cursor-pointer rounded-full hover:bg-blue-800 hover:text-white"
        onClick={() => setStartQuiz(true)}
      >
        Start Quiz
      </motion.button>
      {/* </div> */}
    </div>
  );
};

export default QuizStartGame;
