import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import image from "../../assets/undraw_business_deal_re_up4u.svg";
const EarnSec3 = () => {
  return (
    <Container className="section__container flex-column">
      <h1 className="section__heading" data-aos="fade-up">
        Split your lump-sum amount
      </h1>
      <h5
        className="section__sub__heading my-2 text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        You can split your lump-sum amount into different deposits & invest your
        money with the flexibility of choosing a separate time period for each
        investment in one go.
      </h5>
      <h5
        className="section__sub__heading my-2"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        By multiple investment you can fulfill your financial goals easily!
      </h5>
      <br />
      <br />
      <Row className="g-3 w-100">
        <Col sm={12} lg={6}>
          <img src={image} alt="PayPenny Deal" className="w-100" />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h5 className="section__sub__heading my-4">
            Let us split 1000 CAD into three investments-
          </h5>

          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Holding (split Amount)</th>
                <th>Time period</th>
                <th>Rate of Interest(%)</th>
                <th>Maturity Amount</th>
                <th>Investment Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>500 </td>
                <td>90</td>
                <td>15</td>
                <td>518.49</td>
                <td>Re-Investment</td>
              </tr>
              <tr>
                <td>300</td>
                <td>180</td>
                <td>17</td>
                <td>325.15</td>
                <td>Prom Party</td>
              </tr>
              <tr>
                <td>200</td>
                <td>365</td>
                <td>25</td>
                <td>250.00</td>
                <td>Sister's Birthday</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default EarnSec3;
