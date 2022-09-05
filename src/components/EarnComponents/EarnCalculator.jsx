import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const EarnCalculator = () => {
  const [principle, setPrinciple] = useState(100);
  const [duration, setDuration] = useState(10);
  const [roi, setRoi] = useState(10);
  const [answer, setAnswer] = useState("100");

  useEffect(() => {
    if (duration === 10) {
      setRoi("10");
    }
    if (duration === 15) {
      setRoi("11");
    }
    if (duration === 30) {
      setRoi("12");
    }
    if (duration === 45) {
      setRoi("13");
    }
    if (duration === 60) {
      setRoi("14");
    }
    if (duration === 90) {
      setRoi("15");
    }
    if (duration === 180) {
      setRoi("17");
    }
    if (duration === 365) {
      setRoi("25");
    }

    const interest =
      (parseFloat(principle) * parseFloat(roi) * parseFloat(duration)) / 36500 +
      parseFloat(principle);

    setAnswer(interest.toFixed(2));
  }, [principle, duration, roi, answer]);

  return (
    <Row className="g-3">
      <Col xs={4} sm={4} lg={4}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          data-aos="zoom-out"
        >
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="tel"
            value={principle}
            onChange={(e) => setPrinciple(e.target.value)}
            placeholder={principle}
          />
        </Form.Group>
      </Col>
      <Col xs={4} sm={4} lg={4}>
        <Form.Group className="mb-3" data-aos="zoom-out">
          <Form.Label>Duration</Form.Label>
          <Form.Select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value={10}>10 days</option>
            <option value={15}>15 days</option>
            <option value={30}>30 days</option>
            <option value={45}>45 days</option>
            <option value={60}>60 days</option>
            <option value={90}>90 days</option>
            <option value={180}>180 days</option>
            <option value={365}>365 days</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col xs={4} sm={4} lg={4}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          data-aos="zoom-out"
        >
          <Form.Label>
            {window.innerWidth >= 950 ? "Rate of Interest" : "ROI"}
          </Form.Label>
          <Form.Control type="email" disabled placeholder={`${roi}%`} />
        </Form.Group>
      </Col>
      <Col xs={6} sm={6} lg={6}>
        <Button variant="dark" className="w-100" data-aos="zoom-out">
          Maturity Amount
        </Button>
      </Col>
      <Col xs={6} sm={6} lg={6}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          data-aos="zoom-out"
        >
          <Form.Control type="tel" placeholder={answer} disabled />
        </Form.Group>
      </Col>
    </Row>
  );
};

export default EarnCalculator;
