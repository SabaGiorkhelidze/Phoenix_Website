import React, { useEffect, useContext } from "react";
import quizData from "../../Data/quizData";
import QuizGame from "./QuizGame";
import { QuizContext } from "../../Context/QuizContext";

const QuizLayout: React.FC = () => {
  const {
    currentQuestionIndex,
    score,
    timer,
    setTimer,
    value: { handleAnswerClick, handleNextQuestion },
  } = useContext(QuizContext);

  useEffect(() => {
    const handleTimerDecrease = () => {
      setTimer((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          handleNextQuestion();
          return 10;
        }
      });
    };

    const intervalId = setInterval(handleTimerDecrease, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuestionIndex, setTimer, handleNextQuestion]);

  return (
    <div className="flex justify-center items-center flex-col w-full border-2 border-red-300">
      <QuizGame currentQuestionIndex={currentQuestionIndex}
        quizData={quizData}  
        score={score}
        timer={timer}
        handleAnswerClick={handleAnswerClick}/>
    </div>
  );
};

export default QuizLayout;
