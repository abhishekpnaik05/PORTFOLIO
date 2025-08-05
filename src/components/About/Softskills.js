import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaBug,
  FaUsers,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";

function Softskills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaBug title="Creative Debugging" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUsers title="Team Collaboration" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaComments title="Communication" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLightbulb title="Problem-solving" />
      </Col>
    </Row>
  );
}

export default Softskills;