import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "./Particle";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m55p13g",
        "template_uwawoo7",
        form.current,
        "Guk9l7n5POave5L-D"
      )
      .then(
        () => {
          alert("Message sent! Check your inbox.");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <Container
      fluid
      style={{
        position: "relative",
        paddingTop: "50px",
        paddingBottom: "50px",
        minHeight: "calc(100vh - 80px)", // Adjusted to account for navbar/header height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Particle />
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Get in <span style={{ color: "purple" }}>Touch</span>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
          Feel free to drop me a message!
        </p>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      style={{ 
                        zIndex: 1,
                        position: "relative" // Ensures form fields appear above particle effects
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      style={{ 
                        zIndex: 1,
                        position: "relative"
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                  style={{ 
                    zIndex: 1,
                    position: "relative"
                  }}
                />
              </Form.Group>
              <div className="text-center">
                <Button 
                  variant="primary" 
                  type="submit" 
                  style={{ 
                    zIndex: 1,
                    position: "relative"
                  }}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;