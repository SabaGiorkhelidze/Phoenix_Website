import { quizDataType } from "../../Data/quizData";
import AnswerButton from "./AnswerButton";
type AnswersLayoutPropTypes = {
  quizData: Array<quizDataType>;
  currentQuestionIndex: number;
  score: number;
  handleAnswerClick: (selectedOption: string) => void;
};
const AnswersLayoutComponent = ({
  quizData,
  currentQuestionIndex,

  handleAnswerClick,
}: AnswersLayoutPropTypes) => {
  return (
    <div>
      <div className="flex flex-col justify-evenly gap-5">
        {quizData[currentQuestionIndex].options.map((option, index) => (
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
