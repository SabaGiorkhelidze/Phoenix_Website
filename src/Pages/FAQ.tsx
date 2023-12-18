import DropDown from "../Components/FAQComponents/DropDown";
import Question from "../Components/FAQComponents/Question";
import { ListQuestions, TextQuestions } from "../Data/FAQData";

const FAQ = () => {
  // texts={['one, two, three']} header={['']}
  return (
    <div className="my-32">
      <div className="my-10 px-12">
        <h1>Frequently Asked Questions</h1>
      </div>
      
      {TextQuestions.map((item) => (
        <Question header={item.header} text={item.text} />
      ))}

      {ListQuestions.map((item) => (
        <DropDown header={item.header} texts={item.texts} />
      ))}
    </div>
  );
};

export default FAQ;
