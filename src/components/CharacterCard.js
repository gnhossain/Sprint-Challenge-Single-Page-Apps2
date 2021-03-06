import React from "react";
import styled from "styled-components";


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default function CharacterCard(props) {
  console.log(props)
  return (
        <div>
          <Card>
            <CardImg top width="100%" src={props.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>Name:{props.name}</CardTitle>
              <CardSubtitle>Status:{props.status}</CardSubtitle>
              <CardText>Gender:{props.gender}</CardText>
              {/* <Button>Button</Button> */}
            </CardBody>
          </Card>
        </div>
      );
    };
