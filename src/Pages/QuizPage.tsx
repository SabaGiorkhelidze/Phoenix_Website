import React, { useState } from "react";
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
    <div className="my-32 flex justify-center items-center flex-col w-full border-2 border-red-300">
      {currentQuestion < quizData.length ? (
        <div>
          <h1>Question {currentQuestion + 1}</h1>
          <h2 className=" font-medium">{quizData[currentQuestion].question}</h2>

          <AnswersLayoutComponent
            quizData={quizData}
            score={score}
            currentQuestion={currentQuestion}
            scoreIncrement={() => setScore(score + 1)}
            nextQuestion={() => setCurrentQuestion(currentQuestion + 1)}
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
