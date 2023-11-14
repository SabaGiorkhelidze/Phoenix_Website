import React, { useState } from "react";
import quizData from "../Data/quizData";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  // Define the type for selectedOption
  const handleAnswerClick = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="my-20">
      {currentQuestion < quizData.length ? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          {quizData[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          ))}
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
