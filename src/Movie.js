import React, { Component } from "react";
import Button from "./components/button.js";
import Card from "react-bootstrap/Card";
import "./movie.css";
import "./components/button.css";
// import "./imgflder/${img}`)";

const Movie = ({ img, titel, ondertitel }) => {
  return (
    <div className="carddiv">
      <Card id="(`${img}`)" className="cardclass myshadow1 ">
        <Card.Img variant="top" src={require(`./imgflder/${img}`)} />
        <Card.Body>
          <Card.Title>{titel}</Card.Title>
          <Card.Text className="cardText">{ondertitel}</Card.Text>
          
        </Card.Body><Button />
      </Card>
    </div>
  );
};

export default Movie;
