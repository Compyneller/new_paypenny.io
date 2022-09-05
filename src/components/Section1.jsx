import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../assets/undraw_security_on_re_e491.svg";
const Section1 = () => {
  return (
    <Container className="section__container">
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center "
        >
          <h1 className="section__heading" data-aos="fade-right">
            Hundreds of thousands of NRIs trust Paypenny
          </h1>
          <h5 className="section__sub__heading text-secondary">
            Get the highest exchange rates guaranteed. Download Paypenny now and
            experience the difference.
          </h5>
          <Row className="g-3">
            <Col sm={12} lg={6}>
              <a
                href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
                className="w-100"
                target="_blank"
              >
                <Button
                  variant="dark"
                  className="w-100 download__buttons"
                  data-aos="zoom-in"
                >
                  Android
                </Button>
              </a>
            </Col>
            <Col sm={12} lg={6}>
              <a
                href="https://apps.apple.com/in/app/paypenny/id1545140323"
                target="_blank"
                className="w-100"
              >
                <Button
                  variant="dark"
                  className="w-100 download__buttons"
                  data-aos="zoom-in"
                >
                  iOS
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col sm={12} lg={6}>
          <img src={image} alt="" className="w-100" data-aos="fade-left" />
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
