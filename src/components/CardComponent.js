import React, { useState, useEffect } from "react";
// import axios from "axios"
import Header from "./Header";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const CardComponent = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="10%" src="https://apod.nasa.gov/apod/image/2005/M106_ORG4_APOD1024c.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;