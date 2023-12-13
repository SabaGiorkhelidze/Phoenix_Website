import React, { useEffect, useState } from "react";
import quizData from "../Data/quizData";
import AnswersLayoutComponent from "../Components/QuizComponents/AnswersLayoutComponent";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(10);

  let interval: number;

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

    interval = setInterval(handleTimerDecrease, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion]);

  const handleAnswerClick = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    clearInterval(interval);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(10);
    }
  };

  return (
    <div className="my-32 flex justify-center items-center flex-col w-full border-2 border-red-300">
      {currentQuestion < quizData.length ? (
        <div className="border-2 border-purple-600">
          <h1>Question {currentQuestion + 1}</h1>
          <h2 className=" font-medium break-words">
            {quizData[currentQuestion].question}
          </h2>
          <p>Time remaining: {timer} seconds</p>

          <AnswersLayoutComponent
            quizData={quizData}
            score={score}
            currentQuestion={currentQuestion}
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
    </div>
  );
};

export default Quiz;
