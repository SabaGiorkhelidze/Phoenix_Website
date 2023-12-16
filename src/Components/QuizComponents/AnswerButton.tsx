import { motion } from "framer-motion";

type quizButtonPropTypes = {
  option: string;
  onClickHandler: () => void;
};

const AnswerButton = ({ option, onClickHandler }: quizButtonPropTypes) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      className="border-2 border-blue-800 w-[800px]  py-3 cursor-pointer rounded-full hover:bg-blue-800 hover:text-white"
      onClick={onClickHandler}
    >
      {option}
    </motion.button>
  );
};

export default AnswerButton;
