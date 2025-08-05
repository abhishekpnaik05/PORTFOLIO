import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { MdWork, MdLocationOn, MdDateRange } from "react-icons/md";
import "./Experience.css"; // Assuming you have a CSS file for styling
import companyLogo from "../../Assets/Projects/loogo.png"; // Replace with your actual logo path

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">Professional Experience</strong>
            </h1>
            
            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-title">
                  <img src={companyLogo} alt="Company Logo" className="experience-icon" />
                  <div>
                    <h3 className="position-title">React Intern</h3>
                    <h4 className="company-name">Codemodulo Technologies Pvt Ltd</h4>
                  </div>
                </div>
                <div className="experience-meta">
                  <div className="experience-location">
                    <MdLocationOn /> Bangalore, India
                  </div>
                  <div className="experience-duration">
                    <MdDateRange /> Mar 2025 – Apr 2025
                  </div>
                </div>
              </div>
              
              <div className="experience-content">
                <h5 className="achievements-title">Key Achievements:</h5>
                <ul className="achievements-list">
                  <li>
                    <strong>Built 4+ React apps</strong> with <strong>modular</strong> components and <strong>REST APIs</strong>, improving performance by <strong className="purple">50%</strong>.
                  </li>
                  <li>
                    <strong>Reduced API</strong> calls by <strong className="purple">30%</strong> via <strong>Redux middleware integration</strong> and optimized state logic.
                  </li>
                  <li>
                    <strong>Refactored legacy code</strong> using <strong>React hooks</strong> to boost speed and <strong>developer efficiency</strong>.
                  </li>
                  <li>
                    <strong>Resolved 35%</strong> of <strong>UI issues</strong> with <strong>responsive, cross-browser testing</strong> across devices.
                  </li>
                  <li>
                    Applied <strong>caching and throttling</strong> to cut <strong>network payloads by 30%</strong> and speed up loading.
                  </li>
                  <li>
                    Set up <strong>CI/CD</strong> with <strong>GitHub Actions</strong> for smooth deployment and regression-free updates.
                  </li>
                  <li>
                    <strong>Designed</strong> pixel-perfect <strong>UIs</strong> with <strong>Tailwind and MUI</strong>, increasing <strong>mobile engagement by 25%</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;