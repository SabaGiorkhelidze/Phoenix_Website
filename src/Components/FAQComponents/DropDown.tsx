import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
type FAQPropTypes = {
  header: string;
  texts: string[];
};
const DropDown = ({ header, texts }: FAQPropTypes) => {
  return (
    <div className="my-4 px-12">
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {header}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <OrderedList>
              {texts.map((text) => (
                <ListItem>
                  {"   "}
                  {text}
                </ListItem>
              ))}
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DropDown;
