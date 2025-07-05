import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUbuntu,
  SiGit,
  SiGithub,
  SiGooglechrome,
} from "react-icons/si";
import { FaWindows, FaCode } from "react-icons/fa"; // 👈 FaCode used for VS Code

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu title="Ubuntu" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows title="Windows" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome title="Chrome" />
      </Col>
    </Row>
  );
}

export default Toolstack;
