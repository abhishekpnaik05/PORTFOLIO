import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Abhishek_P_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Col className="d-flex justify-content-center">
            {/* PDF container sized to show exactly 2 pages */}
            <div 
              className="pdf-container"
              style={{ 
                width: width > 786 ? "80%" : "95%",
                height: width > 786 ? "1200px" : "1000px", // Increased mobile height for 2 pages
                overflow: "hidden", // Hide overflow to show only 2 pages
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                position: "relative"
              }}
            >
              <object
                data={`${pdf}#view=FitH&page=1&zoom=100`} // Start from page 1, fit horizontally
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ 
                  display: "block",
                  margin: "0 auto"
                }}
              >
                <embed
                  src={`${pdf}#view=FitH&page=1&zoom=100`}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  style={{ 
                    display: "block",
                    margin: "0 auto"
                  }}
                />
              </object>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;