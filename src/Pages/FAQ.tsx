import React from "react";
import { Accordion, AccordionPanel, Box, Text } from "grommet";
import DropDown from "../Components/FAQComponents/DropDown";

const FAQ = () => {
  // texts={['one, two, three']} header={['']}
  return (
    <div className="my-20">
      <DropDown
        header={"ფოტოს ატვირთვა"}
        texts={[
          "On your computer",
          "go to a web browser.",
          "Go to Google Images.",
          "Click Search by image Google Lens.",
          "Click Upload a file.",
          "Select an image.",
          "Click Open or Choose.",
        ]}
      />
    </div>
  );
};

export default FAQ;
