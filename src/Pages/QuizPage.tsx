import React, { useState } from "react";
import { QuizContext } from "../Context/QuizContext";
import quizData from "../Data/quizData";
import QuizLayout from "../Components/QuizComponents/QuizLayout";
import QuizStartGame from "../Components/QuizComponents/QuizStartGame";
import FinalScore from "../Components/QuizComponents/FinalScore";

export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(10);
  const [interval, setInterval] = useState<number>(0);
  const [startQuiz, setStartQuiz] = useState<boolean>(false);

  const handleAnswerClick = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    clearInterval(interval);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
      setTimer(10);
    }
  };

  const contextValue = {
    currentQuestionIndex,
    score,
    timer,
    interval,
    startQuiz,
    setCurrentQuestionIndex,
    setScore,
    setTimer,
    setStartQuiz,
    setInterval,
    value: {
      handleAnswerClick,
      handleNextQuestion,
    },
  };
  // const handleFinalScore = () => {};

  return (
    <QuizContext.Provider value={contextValue}>
      {currentQuestionIndex === 9 ? (
        <FinalScore />
      ) : (
        <div className="my-40">
          {startQuiz ? <QuizLayout /> : <QuizStartGame />}
        </div>
      )}
    </QuizContext.Provider>
  );
};

export default QuizPage;
