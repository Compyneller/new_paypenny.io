import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Section2.css";
const Section2 = () => {
  return (
    <div className="section2__container py-5">
      <Container>
        <h1 className="section__heading text-center text-light mb-3">
          Send Crypto in 4 easy steps
        </h1>
        <Row className="g-3">
          <Col sm={12} md={6} lg={3}>
            <Card className="shadow section2__card" data-aos="zoom-out">
              <Card.Body>
                <img
                  src="https://img.icons8.com/fluency/344/create.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">
                  Create your account
                </h5>
                <p>
                  Register online, enter your personal details for ID
                  verification. Make sure what you enter matches exactly with
                  your identification documents.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              className="shadow section2__card"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/fluency/344/select-all-files.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">Choose method</h5>
                <p>
                  We’ll show you the exchange rate and you Select the Method to
                  add the Crypto to your wallet.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              className="shadow section2__card"
              data-aos="zoom-out"
              data-aos-delay="500"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/fluency/344/document.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">
                  Input receiver details
                </h5>
                <p>Tell us the details of the person receiving the Crypto.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              className="shadow section2__card"
              data-aos="zoom-out"
              data-aos-delay="700"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/fluency/344/mail.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">Confirm and send</h5>
                <p>
                  Verify and cross check everything is correct and send your
                  Crypto. That’s it. We’ll take care of the rest and tell you
                  when Crypto is transferred.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
