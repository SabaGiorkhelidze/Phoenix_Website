import { Divider } from "@chakra-ui/react";

type QuestionPropTypes = {
  id: number;
  header: string;
  text: string;
  isActive: boolean;
  onActivate: () => void;
};

const Question = ({
  id,
  header,
  text,
  isActive,
  onActivate,
}: QuestionPropTypes) => {
  return (
    <div className="my-6 px-10 ">
      <div
        className=" cursor-pointer flex flex-row items-center  px-2 "
        onClick={onActivate}
      >
        <div
          className={
            isActive
              ? " bg-[#1B03A3] rounded-full  w-4 h-4 border-2 border-blue-400  mx-4"
              : "rounded-full  w-4 h-4 border-2 border-blue-400  mx-4"
          }
        ></div>
        <div>
          <h2> {header}</h2>
        </div>
      </div>
      <div className={isActive ? "block my-4" : "hidden"}>
        <h6> {text}</h6>
        <Divider
          orientation="horizontal"
          height="20px"
          marginX="40px"
          variant="solid"
        />
      </div>
    </div>
  );
};

export default Question;
