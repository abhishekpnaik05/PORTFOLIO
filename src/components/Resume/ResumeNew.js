import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Abhishek_P_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth;
      setIsMobile(newWidth <= 786);
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
            <div 
              className="pdf-container"
              style={{ 
                width: isMobile ? "100%" : "80%",
                height: isMobile ? "80vh" : "1200px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                position: "relative"
              }}
            >
              {isMobile ? (
                // Mobile Solution: Use PDF.js viewer or Google Docs viewer
                <iframe
                  src={`https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + pdf)}&embedded=true`}
                  width="100%"
                  height="100%"
                  style={{ 
                    border: "none",
                    display: "block"
                  }}
                  title="Resume PDF"
                />
              ) : (
                // Desktop Solution: Direct PDF embed
                <iframe
                  src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=FitH`}
                  width="100%"
                  height="100%"
                  style={{ 
                    border: "none",
                    display: "block"
                  }}
                  title="Resume PDF"
                />
              )}
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