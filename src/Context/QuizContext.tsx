import { createContext, ReactNode } from "react";

type QuizContextType = {
  currentQuestionIndex: number;
  score: number;
  timer: number;
  interval: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  value: {
    handleAnswerClick: (selectedOption: string) => void;
    handleNextQuestion: () => void;
  };
};

export const QuizContext = createContext<QuizContextType>({
  currentQuestionIndex: 0,
  score: 0,
  timer: 10,
  interval: 0,
  setCurrentQuestionIndex: () => {},
  setScore: () => {},
  setTimer: () => {},
  value: {
    handleAnswerClick: () => {},
    handleNextQuestion: () => {},
  },
});