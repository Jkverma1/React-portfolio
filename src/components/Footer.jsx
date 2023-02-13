import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import freelancer from "../assets/img/freelancer.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="footer-logo">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jatin9227/">
                <img src={linkedin} alt="Icon" />
              </a>
              <a href="http://github.com/Jkverma1/">
                <img src={github} alt="Icon" />
              </a>
              <a href="https://www.freelancer.com/u/jatins9227">
                <img src={freelancer} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
