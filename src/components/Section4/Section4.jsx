import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Section4.css";
import image from "../../assets/undraw_palette_-110-c.svg";
const Section4 = () => {
  return (
    <Row className="g-3" style={{ overflowX: "hidden" }}>
      <Col sm={12} lg={6}>
        <div
          className="w-100 section4__left__container px-3"
          data-aos="zoom-in"
        >
          <img src={image} alt="" className="w-100" data-aos="fade-right" />
        </div>
      </Col>
      <Col sm={12} lg={6}>
        <div
          className="w-100 d-flex  justify-content-center flex-column "
          style={{ minHeight: "100vh" }}
        >
          <h1 className="section__heading">Why Choose Us?</h1>
          <br />

          <Container className="ms-0 p-2">
            <Row className="g-3">
              <Col sm={12} lg={12}>
                <Card className=" shadow section2__card" data-aos="fade-left">
                  <Card.Body>
                    <img
                      src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/344/external-fast-distribution-xnimrodx-blue-xnimrodx.png"
                      height={100}
                      alt=""
                    />
                    <h3 className=" my-3">We're Fast</h3>
                    <p>90% of our transactions are authorized in minutes.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} lg={12}>
                <Card
                  className=" shadow section2__card"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <Card.Body>
                    <img
                      src="https://img.icons8.com/color/344/application-shield.png"
                      height={100}
                      alt=""
                    />
                    <h3 className=" my-3">We’re Safe</h3>
                    <p>
                      Our industry-leading technology protects your Crypto and
                      guarantees it arrives safely every time.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  );
};

export default Section4;
