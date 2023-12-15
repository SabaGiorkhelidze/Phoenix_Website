import React, { useState } from "react";
import { QuizContext } from "../Context/QuizContext";
import quizData from "../Data/quizData";
import QuizLayout from "../Components/QuizComponents/QuizLayout";

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
    setCurrentQuestionIndex,
    setScore,
    setTimer,
    value: {
      handleAnswerClick,
      handleNextQuestion,
    },
  };

  return (
    <QuizContext.Provider value={contextValue}>
      <div className="my-32">
        <h1>hello</h1>
        <QuizLayout />
      </div>
    </QuizContext.Provider>
  );
};

export default QuizPage;
