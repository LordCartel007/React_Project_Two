// importing the stuff for bootstrap and react
import React from "react";
import { Card, Button } from "react-bootstrap";

// styling the card
const Players = ({ name, team, nationality, jerseyNumber, age, Image }) => {
  return (
    <Card
      className=" mb-5 bg-dark text-white "
      style={{ width: "40vw", height: "90vh" }}
    >
      <Card.Body>
        <Card.Title
          className="text-warning "
          style={{ fontSize: "7vh", fontWeight: "bold" }}
        >
          {name}
        </Card.Title>
        <Card.Img
          variant="top"
          src={Image}
          style={{ height: "48vh", width: "38vw" }}
        />
        <Card.Text
          className="text-primary"
          style={{ fontSize: "4vh", fontWeight: "bold" }}
        >
          Team: {team}
        </Card.Text>
        <Card.Text style={{ fontSize: "2vh", fontWeight: "bold" }}>
          Nationality: {nationality}
        </Card.Text>
        <Card.Text style={{ fontSize: "2vh", fontWeight: "bold" }}>
          JerseyNumber: {jerseyNumber}
        </Card.Text>
        <Card.Text style={{ fontSize: "2vh", fontWeight: "bold" }}>
          Age: {age}
        </Card.Text>
        <Button variant="warning" className="text-black">
          Support
        </Button>
      </Card.Body>
    </Card>
  );
};

// Define default props
Players.defaultProps = {
  Image: "default-image-url.jpg", // Provide a default image URL
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: "00",
  age: "N/A",
};

export default Players;
