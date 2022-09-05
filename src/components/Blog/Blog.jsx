import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../../assets/photo-1483389127117-b6a2102724ae.avif";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog__container">
      <div class="custom-shape-divider-top-1662109117">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <Container>
        <Row className="g-5">
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center "
          >
            <h5
              className="text-light"
              style={{ opacity: ".7" }}
              data-aos="fade-right"
            >
              BLOGS
            </h5>
            <br />
            <h1
              className="section__heading text-light"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              How to transfer money from Canada to India without any charges? -
              Paypenny
            </h1>
            <br />
            <h5
              className="section__sub__heading text-light"
              data-aos="fade-right"
              style={{ opacity: ".7" }}
            >
              Money transfer from Canada to India | zero charges for money
              transfer to India
            </h5>
            <br />
            <Button
              variant="dark"
              className="w-100 download__buttons"
              data-aos="zoom-in-up"
              onClick={() => {
                navigate("/blog");
                window.scroll(0, 0);
              }}
            >
              Read More
            </Button>
          </Col>
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center "
          >
            <img
              src={image}
              alt="PayPenny Blog"
              className="w-100 shadow rounded"
              style={{ zIndex: "1000" }}
              data-aos="fade-left"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
