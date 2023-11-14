type quizDataType = {
    question: string,
    options: Array<string>,
    correctAnswer: string,
}

const quizData: Array<quizDataType> = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Madrid", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Dolphin"],
      correctAnswer: "Blue Whale",
    },

  ];
  
  export default quizData;
  