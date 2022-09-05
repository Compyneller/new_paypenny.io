import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import image from "../../assets/undraw_transfer_money_re_6o1h.svg";

const EarnSec4 = () => {
  return (
    <Container className="section__container flex-column">
      <Row className="g-5 w-100">
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center "
        >
          <h1 className="text-dark section__heading" data-aos="fade-right">
            Earn on Premature Withdrawals
          </h1>
          <br />
          <h5
            className="section__sub__heading text-dark my-2"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            You can also withdraw the money prematurely and you will still earn
            interest @ 10 % per annum.
          </h5>
          <br />
          <h5
            className="section__sub__heading text-dark my-2"
            data-aos="fade-right"
          >
            Minimum deposit period is only 10 days .
          </h5>
          <br />
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
      <br />
      <br />
      <br />
      <Row className="g-3 w-100">
        <Col sm={12} lg={6}>
          <h5 className=" text-center section__sub__heading my-2 text-dark">
            Amount at Maturity
          </h5>
          <p className="text-center">
            Let us take the duration of the maturity as 45 days.
          </p>
          <Table responsive striped bordered hover>
            <tbody>
              <tr>
                <td>Invested Amount </td>
                <td>1000</td>
              </tr>
              <tr>
                <td>Interest For 45 Days @ 13% </td>
                <td>16.03</td>
              </tr>
              <tr>
                <td>Amount</td>
                <td>1016.03</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col sm={12} lg={6}>
          <h5 className=" text-center section__sub__heading my-2 text-dark">
            Premature Withdrawal
          </h5>
          <p className="text-center">
            You withdrawal on the 44th day (one day before maturity period)
          </p>
          <Table responsive striped bordered hover>
            <tbody>
              <tr>
                <td>Invested Amount </td>
                <td>1000</td>
              </tr>
              <tr>
                <td>Interest For 44 Days @ 10% </td>
                <td>12.05</td>
              </tr>
              <tr>
                <td>Amount</td>
                <td>1012.05</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default EarnSec4;
