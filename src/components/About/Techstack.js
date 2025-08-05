import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiTypescript,
  SiBootstrap,
  SiMui,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  FaServer,
  FaKey,
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Frontend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap title="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui title="Material UI" />
      </Col>
      
      {/* Backend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress title="Express.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer title="RESTful APIs" />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens title="JWT Authentication" />
      </Col>
    </Row>
  );
}

export default Techstack;