import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function LocationCard(props) {
  console.log(props);
  return (
  // <span>todo: location</span>;
  <div>
  <Card>
    {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
    <CardBody>
      <CardTitle>Location:{props.name}</CardTitle>
      <CardSubtitle>Type:{props.type}</CardSubtitle>
      {/* <CardText>URL:{props.url}</CardText> */}
      {/* <Button>Button</Button> */}
    </CardBody>
  </Card>
</div>
);
}
