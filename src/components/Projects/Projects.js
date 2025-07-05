import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import stock from "../../Assets/Projects/stoock.webp";
import meet from "../../Assets/Projects/confera.webp";
import portfolio from "../../Assets/Projects/portfolio.webp"
import parking from "../../Assets/Projects/parking.webp";
import commerce from "../../Assets/Projects/commerce.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Market Web Application"
              description="Aconova is a responsive stock market dashboard with real-time watchlist and trading interface.
              It allows users to track live stock data, view charts, and execute buy actions efficiently.
              Built with React and a mobile-first design, it ensures smooth user experience across devices."
              demo="https://aconova.onrender.com"
              ghLink="https://github.com/abhishekpnaik05/ACONOVA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meet}
              isBlog={false}
              title="video conferencing application"
              description="Confera is a peer-to-peer video conferencing web app built for seamless virtual meetings.
              It features real-time video/audio calls, authentication, and a responsive user interface.
              Powered by WebRTC and React, Confera offers a Zoom-like experience tailored for modern web use."
              demo="https://confera-frontend1.onrender.com"
              ghLink="https://github.com/abhishekpnaik05/CONFERA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="This application is built using HTML, JavaScript, and a Weather API.
              It displays current weather conditions for any searched location.
              Users can easily check temperature, humidity, and general weather status."
              demo="https://weather-app-ff5z.onrender.com"
              ghLink="https://github.com/abhishekpnaik05/Weather-App"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Frontend developer portfolio showcasing React.js expertise, responsive designs, and modern web projects. Features my technical skills, work samples, and professional background. "
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parking}
              isBlog={false}
              title="AI & IOT Based Smart Parking System"
              description="An intelligent parking system using AI cameras and IoT sensors to detect available spaces in real-time, reducing congestion and optimizing parking efficiency through automated guidance."
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commerce}
              isBlog={false}
              title="E-Commerce Site"
              description="Shop online for quality products. Easy checkout, fast delivery, and secure payments. Your one-stop shopping destination."
              ghLink="https://github.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
