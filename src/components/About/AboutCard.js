import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek P </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            <br />
              I’m currently in my final year of B.E. at Sir M. Visvesvaraya Institute of Technology, where I’m sharpening my skills in software development and problem-solving.
            <br />
            {/* I have completed BE at The Oxford College Of Engineering Bangalore. */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring ideas that blend creativity with technology
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose. Build with passion."{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
