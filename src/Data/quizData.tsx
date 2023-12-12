export type quizDataType = {
  question: string;
  options: Array<string>;
  correctAnswer: string;
};

const quizData: Array<quizDataType> = [
  {
    question:
      "In the game of Monopoly, what color are the properties in the most expensive group?",
    options: ["Green", "Yellow", "Red", "Blue"],
    correctAnswer: "Green",
  },
  {
    question: "How many tiles are there in a standard Scrabble game?",
    options: ["100", "120", "144", "150"],
    correctAnswer: "100",
  },
  {
    question:
      "What is the maximum number of players in a standard game of Settlers of Catan?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "4",
  },
  {
    question:
      "In chess, which piece has the unique ability to jump over other pieces?",
    options: ["Pawn", "Rook", "Knight", "Bishop"],
    correctAnswer: "Knight",
  },
  {
    question: "What classic board game involves solving a murder mystery?",
    options: ["Clue", "Risk", "Sorry!", "Pictionary"],
    correctAnswer: "Clue",
  },
  {
    question:
      "In which board game do players buy and sell real estate, trying to bankrupt their opponents?",
    options: ["Life", "Risk", "Monopoly", "Candy Land"],
    correctAnswer: "Monopoly",
  },
  {
    question:
      "How many cards are in a standard deck of playing cards used for games like Poker and Blackjack?",
    options: ["48", "52", "54", "56"],
    correctAnswer: "52",
  },
  {
    question: "What is the objective of the game Jenga?",
    options: [
      "Build the tallest tower",
      "Eliminate opponents",
      "Collect the most cards",
      "Avoid landing on mines",
    ],
    correctAnswer: "Build the tallest tower",
  },
  {
    question:
      "Which classic board game involves trying to sink your opponent's fleet of ships?",
    options: ["Chess", "Battleship", "Checkers", "Connect Four"],
    correctAnswer: "Battleship",
  },
  {
    question: "What is the primary objective in the game Risk?",
    options: [
      "Build the tallest tower",
      "Eliminate opponents",
      "Collect the most cards",
      "Conquer the world",
    ],
    correctAnswer: "Conquer the world",
  },
];

export default quizData;
