import { Heading, Text, Divider } from "@chakra-ui/react";

type QuestionPropTypes = {
  header: string;
  text: string;
};

const Question = ({ header, text }: QuestionPropTypes) => {
  return (
    <div className="">
      <Heading as={"h2"} size={"lg"} paddingX={"40px"}>
        {header}
      </Heading>

      <Text as={"h6"} size={"lg"} paddingX={"40px"}>
        {text}
      </Text>

      <Divider orientation="horizontal" height={"20px"} marginX={"40px"} variant={'solid'} />
    </div>
  );
};

export default Question;
