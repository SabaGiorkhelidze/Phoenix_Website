import React from "react";
// import Phoenix from "../../assets/phoenix.jpg";
import { Card, Icon, Image } from "semantic-ui-react";
type MemberCardPropsTypes = {
  id: number;
  picture: string;
  Name: string;
  Position: string;
};

const MemberCard: React.FC<MemberCardPropsTypes> = ({
  id,
  picture,
  Name,
  Position,
}) => {
  return (

    <Card>
      <Image src={picture} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{Name}</Card.Header>
        <Card.Description>
          {Position}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="flex  justify-start gap-5">
        <a>
          <Icon name="linkedin" />
          22 Friends
        </a>
        <a>
          <Icon name="github" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
};

export default MemberCard;
