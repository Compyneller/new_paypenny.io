import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../assets/undraw_fashion_photoshoot_mtq8.svg";
const Section6 = () => {
  return (
    <Row
      className="g-3 py-5 d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", overflowX: "hidden" }}
    >
      <Col sm={12} lg={6} className="px-3">
        <img
          src={image}
          alt="Paypenny Ambassador"
          className="w-100"
          data-aos="fade-right"
        />
      </Col>

      <Col
        sm={12}
        lg={6}
        className="d-flex align-items-center justify-content-start"
      >
        <Container className="ms-0">
          <h1 className="section__heading" data-aos="fade-left">
            Become Our Brand Ambassador
          </h1>

          <h5
            className="section__sub__heading text-secondary"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Are you a social media buzz? Become our ambassador and if you are
            lucky, you might be chosen for our campaigns soon and will get
            exclusive rewards!
          </h5>

          <Button
            variant="dark"
            className="w-100 mb-5 download__buttons"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            Join the Program
          </Button>

          <h1 className="section__heading" data-aos="zoom-in-down">
            Frequently Ask Question
          </h1>
          <br />
          <Row className="g-3">
            <Col sm={12} lg={6}>
              <Card className="shadow section2__card" data-aos="zoom-out-down">
                <Card.Body>
                  <h5 className="section__sub__heading my-4">
                    How can I top up my Paypenny account?
                  </h5>

                  <p>
                    You can top up your paypenny account through a bank wire
                    transfer or Interac E- transfer.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={6}>
              <Card
                className="shadow section2__card"
                data-aos="zoom-out-down"
                data-aos-delay="500"
              >
                <Card.Body>
                  <h5 className="section__sub__heading my-4">
                    Do I need to verify my account?
                  </h5>

                  <p>
                    As a fully regulated financial services business, we are
                    required to verify the identity of all our customers. Where
                    possible we attempt to speed up the process through
                    electronic checks. Where this isn’t possible, we require
                    proof of identification.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Section6;
