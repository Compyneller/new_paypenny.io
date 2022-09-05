import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import image from "../../../assets/toppng.com-five-star-rating-623x124.png";
import "./Blog.css";
const EarnSec5 = () => {
  return (
    <div className="blog__container flex-column">
      <h1
        className="section__heading mb-5"
        style={{ zIndex: "100" }}
        data-aos="fade-up"
      >
        Reason why people choose Earn Wallet
      </h1>
      <div class="custom-shape-divider-top-1662109117">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          data-aos="fade-right"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <Container>
        <Row className="g-3 w-100">
          <Col sm={12} lg={4}>
            <Card className="shadow section2__card" data-aos="zoom-out">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <img src={image} className="w-75 " alt="" />
                <p className="mt-3">
                  I save money every week from my expenses and invest it into
                  the Earn Wallet by Paypenny app. I get amazing returns on my
                  money without paying any additional charges. I found this to
                  be a great deal to grow your savings.
                </p>
                <h5 className="section__sub__heading my-2">
                  - Shivansh Devgan
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card className="shadow section2__card" data-aos="zoom-out">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <img src={image} className="w-75 " alt="" />
                <p className="mt-3">
                  I am very happy with the interest rate provided on an
                  investment. I deposited my 2000 CAD for 60 days and got
                  2046.03 CAD. I trust Earn Wallet and invest my money for the
                  long term to get the benefits.
                </p>
                <h5 className="section__sub__heading my-2">- Manjeet Singh</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card className="shadow section2__card" data-aos="zoom-out">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <img src={image} className="w-75 " alt="" />
                <p className="mt-3">
                  Most trustable and easy feature to grow your money. I have
                  been using Paypenny for over a year and the Earn Wallet
                  feature is extraordinary. Best interest rate, easy to use,
                  best customer support & you can even withdraw your money
                  before maturity. I love Earn Wallet.
                </p>
                <h5 className="section__sub__heading my-2">- Prabhjeet Kaur</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card className="shadow section2__card" data-aos="zoom-out">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <img src={image} className="w-75 " alt="" />
                <p className="mt-3">
                  I have been using Earn Wallet regularly. In the beginning, it
                  didn't give me a vibe check so I invested a small amount just
                  for 10 days then after 10 days I got my money back with 10%
                  interest. Awesome! Now, I regularly use the Paypenny app.
                </p>
                <h5 className="section__sub__heading my-2">- Vansh Chaddha</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card className="shadow section2__card" data-aos="zoom-out">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <img src={image} className="w-75 " alt="" />
                <p className="mt-3">
                  My friends recommended Earn Wallet. A simply great feature to
                  grow your CAD. I like customer support the most. They easily
                  explained the whole process on call. Trustable & giving best
                  interest on savings. All of my friends & I use Earn Wallet.
                </p>
                <h5 className="section__sub__heading my-2">- Noah Willson</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EarnSec5;
