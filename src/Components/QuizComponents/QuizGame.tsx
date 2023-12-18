import React from "react";
import AnswersLayoutComponent from "./AnswersLayoutComponent";
import { Question } from "../../Pages/QuizPage";

type QuizGameProps = {
  currentQuestionIndex: number;
  quizData: Question[];
  score: number;
  timer: number;
  handleAnswerClick: (selectedOption: string) => void;
};

const QuizGame: React.FC<QuizGameProps> = ({
  currentQuestionIndex,
  quizData,
  score,
  timer,
  handleAnswerClick,
}) => {
  return (
    <>
      {currentQuestionIndex < quizData.length ? (
        <div className="">
          <h1>Question {currentQuestionIndex + 1}</h1>
          <h2 className="font-medium break-words">
            {quizData[currentQuestionIndex].question}
          </h2>
          <p>Time remaining: {timer} seconds</p>

          <AnswersLayoutComponent
            quizData={quizData}
            score={score}
            currentQuestionIndex={currentQuestionIndex}
            handleAnswerClick={handleAnswerClick}
          />
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} out of {quizData.length}
          </p>
        </div>
      )}
    </>
  );
};

export default QuizGame;
