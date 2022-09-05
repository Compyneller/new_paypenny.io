import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import image from "../../assets/undraw_savings_re_eq4w.svg";
const EarnSec6 = () => {
  const navigate = useNavigate();
  return (
    <Container className="section__container">
      <Row className="g-3 w-100">
        <Col
          sm={12}
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <img src={image} alt="PayPenny Save Money" className="w-100" />
        </Col>
        <Col sm={12} lg={6}>
          <h1 className="section__heading">Save money to buy your future!</h1>
          <h5 className="section__sub__heading my-4">
            Don't just take our word for it ...
          </h5>
          <h5 className="section__sub__heading my-4">Earn Wallet Guide</h5>
          <p>
            Want to learn more about the Earn Wallet Process? You will get all
            the additional information in this guide. Check out & start you
            journey now!
          </p>
          <Button
            variant="dark"
            className="w-100 download__buttons"
            data-aos="zoom-in-up"
            onClick={() => navigate("/processflow")}
          >
            Earn Wallet Process
          </Button>
          <h5 className="section__sub__heading my-4">
            Round the clock Customer Support Help
          </h5>
          <p>
            We are avaiable 24/7. Feel free to connect with our team for any
            queries or issues. They will be happy to assist you.
          </p>
          <Button
            variant="dark"
            className="w-100 download__buttons"
            data-aos="zoom-in-up"
            onClick={() => navigate("/contact-us")}
          >
            Customer Support Help
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EarnSec6;
