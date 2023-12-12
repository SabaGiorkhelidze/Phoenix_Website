import { quizDataType } from "../../Data/quizData";
import AnswerButton from "./AnswerButton";
type AnswersLayoutPropTypes = {
  quizData: Array<quizDataType>;
  currentQuestion: number;
  score: number;
  handleAnswerClick: (selectedOption: string) => void;
};
const AnswersLayoutComponent = ({
  quizData,
  currentQuestion,

  handleAnswerClick,
}: AnswersLayoutPropTypes) => {
  return (
    <div>
      <div className="flex flex-col justify-evenly gap-5">
        {quizData[currentQuestion].options.map((option, index) => (
          <AnswerButton
            key={index}
            option={option}
            onClickHandler={() => handleAnswerClick(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswersLayoutComponent;
