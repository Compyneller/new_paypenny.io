import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Section3 = () => {
  return (
    <Container
      className="d-flex py-5 flex-column aling-items-center justify-content-center"
      style={{ minHeight: "100vh", overflowX: "hidden" }}
    >
      <h1 className="section__heading  text-center" data-aos="zoom-out">
        Benefits of Sending Crypto with Paypenny
      </h1>
      <br />
      <br />
      <Row className="g-3">
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow section2__card" data-aos="fade-right">
            <Card.Body>
              <img
                src="https://img.icons8.com/color/344/embassy.png"
                height={80}
                alt=""
              />
              <h5 className="section__sub__heading my-3">
                Govt Reg & Regulated
              </h5>
              <p>
                Our company is registered with FINTRAC which clearly mentions
                how healthy our paypenny ecosystem is.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow section2__card" data-aos="zoom-out">
            <Card.Body>
              <img
                src="https://img.icons8.com/fluency/344/location-off.png"
                height={80}
                alt=""
              />
              <h5 className="section__sub__heading my-3">Anytime Anywhere</h5>
              <p>
                We are available for you every time that's the reason we have
                made our system powerful and anyone can access it anytime
                anywhere.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow section2__card" data-aos="fade-left">
            <Card.Body>
              <img
                src="https://img.icons8.com/fluency/344/tags.png"
                height={80}
                alt=""
              />
              <h5 className="section__sub__heading my-3">Better Rates</h5>
              <p>
                Sending Crypto to your home is comparatively lower than the
                banks, get the best rates at ease!
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow section2__card" data-aos="fade-right">
            <Card.Body>
              <img
                src="https://img.icons8.com/fluency/344/paid-bill.png"
                height={80}
                alt=""
              />
              <h5 className="section__sub__heading my-3">Easy & Convenient</h5>
              <p>
                Get started in minutes with our simple signup process. Send
                Crypto to India on the go with our mobile app.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow section2__card" data-aos="zoom-out">
            <Card.Body>
              <img
                src="https://img.icons8.com/external-flat-berkahicon/344/external-Track-location-flat-berkahicon.png"
                height={80}
                alt=""
              />
              <h5 className="section__sub__heading my-3">
                Track your transfer online
              </h5>
              <p>
                Don't lose sight of your Crypto. Track your transfer at every
                stage.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} data-aos="fade-left">
          <Card className="shadow section2__card">
            <Card.Body>
              <img
                src="https://img.icons8.com/external-itim2101-flat-itim2101/344/external-support-contact-and-message-itim2101-flat-itim2101.png"
                height={80}
                alt=""
              />
              <h5 className="section__sub__heading my-3">
                Round The Clock Support
              </h5>
              <p>
                Our amazing customer support team are on standby to help you
                when need them. Get an answer to your question, fast.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Section3;
