import React from "react";

import Players from "./Players";

import Player from "../Player";

import { Row, Col, Container } from "react-bootstrap";

// mapping the players array
const PlayersList = () => {
  return (
    <Container>
      <Row>
        {Player.map((eachplayer) => {
          return (
            <Col sm={6} md={4} lg={6} key={eachplayer.id}>
              <Players
                Image={eachplayer.Image}
                name={eachplayer.name}
                team={eachplayer.team}
                nationality={eachplayer.nationality}
                jerseyNumber={eachplayer.jerseyNumber}
                age={eachplayer.age}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

// exporting PlayersList
export default PlayersList;
