import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const EarnSec2 = () => {
  return (
    <div className="section__container" style={{ overflow: "hidden" }}>
      <Container>
        <h1 className="section__heading mb-4 text-dark" data-aos="fade-up">
          Benefits of Using Paypenny
        </h1>
        <Row className="g-3">
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card shadow"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/344/external-secure-financial-xnimrodx-blue-xnimrodx.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">Safe & Secure</h5>
                <p>
                  Every transaction is covered with secure transmission
                  technology which makes your transaction safe & secure
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card shadow"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-Instant-Payment-instant-payment-instant-payment-inipagistudio-mixed-inipagistudio.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">Instant Transfer</h5>
                <p>
                  Sit back, breathe & relax Paypenny covers thousands of
                  transactions in a minute. Now, send Money instantly to your
                  loved ones!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card shadow"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-target-customer-round-the-clock-online-by-web-portal-apps-shadow-tal-revivo.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">
                  24/7 Customer Support
                </h5>
                <p>
                  The Customer Support Team of Paypenny is no less than
                  avengers! They are round the clock available to listen to your
                  queries.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card shadow"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-anggara-flat-anggara-putra/344/external-send-ui-basic-anggara-flat-anggara-putra.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">
                  Send Money Everyday
                </h5>
                <p>
                  Paypenny provides its services 7 days a week. That's
                  incomparable, right? Enjoy our services every day!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card shadow"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/344/external-easy-basic-ui-elements-2.2-sbts2018-outline-color-sbts2018.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-3">Smooth UI</h5>
                <p>
                  The smooth user interface, the bright theme, and easy-to-use
                  features make the Paypenny application stand out in the crowd!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EarnSec2;
