import React from "react";

type quizButtonPropTypes = {
  option: string;
  onClickHandler: () => void
};

const AnswerButton = ({ option, onClickHandler }: quizButtonPropTypes) => {
  return (
    <button className="border-2 border-blue-800 px-10 py-3 cursor-pointer rounded-full" onClick={onClickHandler}>
      {option}
    </button>
  );
};

export default AnswerButton;
