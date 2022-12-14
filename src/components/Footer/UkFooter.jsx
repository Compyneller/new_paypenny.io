import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import image from "../../assets/onlink_to_wjt5cq.svg";
import AllSocialLinks from "./AllSocialLinks";
import UkFooterCard from "./UkFooterCard";
import { Link } from "react-router-dom";
const UkFooter = () => {
  return (
    <div className="footer__container">
      <div class="custom-shape-divider-top-1662111856">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer__content pb-5">
        <Container>
          <Row className="g-3">
            <Col sm={12} lg={6} className="d-flex flex-column ">
              <h1 className="section__heading text-light text-center">
                Scan to Download App
              </h1>
              <br />
              <img
                src={image}
                alt="PayPenny Qr"
                className="footer__qr"
                style={{ filter: "invert(1)", mixBlendMode: "lighten" }}
              />
            </Col>
            <Col
              sm={12}
              lg={6}
              className="d-flex flex-column justify-content-center"
            >
              <h1 className="section__heading text-light text-center">
                Click to download app
              </h1>
              <br />
              <a
                href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
                className="footer__downloadButton"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="dark"
                  className="w-100 download__buttons"
                  data-aos="zoom-in"
                >
                  Android
                </Button>
              </a>
              <a
                href="https://apps.apple.com/in/app/paypenny/id1545140323"
                target="_blank"
                rel="noreferrer"
                className="footer__downloadButton"
              >
                <Button
                  variant="dark"
                  className="w-100 download__buttons"
                  data-aos="zoom-in"
                >
                  iOS
                </Button>
              </a>
              <AllSocialLinks />
            </Col>
          </Row>
          <br />
          <br />
          <UkFooterCard />
          <br />

          <h1 className="section__heading text-center text-light">
            Trusted by over 10,000+ users
          </h1>
          <br />
          <br />
          <div className="d-flex  justify-content-between w-100 footer__links">
            <Link to="/tc-uk" onClick={() => window.scroll(0, 0)}>
              Terms & Conditions
            </Link>
            <Link to="/pp-uk" onClick={() => window.scroll(0, 0)}>
              Privacy Policy
            </Link>
            <Link to="/contact-us-uk" onClick={() => window.scroll(0, 0)}>
              Contact Us
            </Link>
          </div>
          <br />
          <br />
          <Row className="g-3">
            <Col sm={12} lg={8} className="d-flex align-items-center">
              <p className="text-light ">
                ?? paypenny all Rights Reserved. The Brand PayPenny belongs to
                Trackon Canada private limited is registered in England and
                Wales with registration number 13791797.
              </p>
            </Col>
            <Col sm={12} lg={4} className="d-flex align-items-center">
              <AllSocialLinks />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default UkFooter;
