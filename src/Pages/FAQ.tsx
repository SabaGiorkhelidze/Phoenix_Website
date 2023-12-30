// import DropDown from "../Components/FAQComponents/DropDown";
import Question from "../Components/FAQComponents/Question";
import { ListQuestions, TextQuestions } from "../Data/FAQData";
import { useState } from "react";

const FAQ = () => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const handleQuestionClick = (id: number) => {
    setActiveQuestionId(id === activeQuestionId ? null : id);
  };
  return (
    <div className="my-32">
      <div className="my-10 px-12">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="md:grid  md:grid-cols-2 md:static">
        {TextQuestions.map((item) => (
        <Question
        key={item.id}
        id={item.id}
        header={item.header}
        text={item.text}
        isActive={item.id === activeQuestionId}
        onActivate={() => handleQuestionClick(item.id)}
        />
      ))}
      </div>
      

      {/* {ListQuestions.map((item) => (
        <DropDown header={item.header} texts={item.texts} />
      ))} */}
    </div>
  );
};

export default FAQ;
