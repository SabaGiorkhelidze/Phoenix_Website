import { createContext } from "react";

type QuizContextType = {
  currentQuestionIndex: number;
  score: number;
  timer: number;
  interval: number;
  startQuiz: boolean;

  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setStartQuiz: React.Dispatch<React.SetStateAction<boolean>>;

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
  startQuiz: false,
  setCurrentQuestionIndex: () => {},
  setScore: () => {},
  setTimer: () => {},
  setStartQuiz: () => {},
  value: {
    handleAnswerClick: () => {},
    handleNextQuestion: () => {},
  },
});
