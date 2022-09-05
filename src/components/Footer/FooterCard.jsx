import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const FooterCard = () => {
  return (
    <Row className="g-3">
      <Col sm={12} md={6} lg={3}>
        <Card className="shadow section2__card" data-aos="zoom-out">
          <Card.Body>
            <img
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-target-customer-round-the-clock-online-by-web-portal-apps-shadow-tal-revivo.png"
              height={80}
              alt=""
            />
            <h5 className="section__sub__heading my-3">
              24/7 Crypto Transfer to India
            </h5>
            <p>
              Send Crypto to India whenever you want to with our iOS & Android
              mobile application. We are always open to you.
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
              src="https://img.icons8.com/fluency/344/pulic-order-risk.png"
              height={80}
              alt=""
            />
            <h5 className="section__sub__heading my-3">
              Lowest possible risk level
            </h5>
            <p>
              We have advanced technology which improves our data & insights and
              puts our business at the lowest risk level.
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
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-care-smart-technology-flaticons-lineal-color-flat-icons.png"
              height={80}
              alt=""
            />
            <h5 className="section__sub__heading my-3">
              We handled over $100+ Million last year
            </h5>
            <p>
              Our business’s main asset is currency. We have handled currency
              worth over $100+ Million in the last year.
            </p>
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
              src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-happy-friendship-wanicon-flat-wanicon.png"
              height={80}
              alt=""
            />
            <h5 className="section__sub__heading my-3">
              10,000+ happy customers & counting
            </h5>
            <p>
              We have gained the trust of 10,000+ people to manage their
              currency and the numbers are increasing day by day.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FooterCard;
