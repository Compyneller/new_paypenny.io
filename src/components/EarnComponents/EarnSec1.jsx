import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import EarnCalculator from "./EarnCalculator";
import EarnTable from "./EarnTable";
import image from "../../assets/undraw_mobile_devices_k1ok.svg";
const EarnSec1 = () => {
  return (
    <Container className="section__container flex-column">
      <h1 className="section__heading" data-aos="fade-up">
        What makes us stand out in the market?
      </h1>
      <br />
      <Row className="g-3">
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow section2__card">
            <Card.Body>
              <img
                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/344/external-wallet-man-accessories-kiranshastry-lineal-color-kiranshastry.png"
                height={80}
                alt=""
              />
              <h5 className="my-3 section__sub__heading">Super Wallet</h5>
              <p>
                Paypenny present’s Super wallet where you can add as low as GBP
                1 and as high as £ 10,000 as many times as you want in a single
                day!
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow section2__card">
            <Card.Body>
              <img
                src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/344/external-transaction-fintech-xnimrodx-blue-xnimrodx.png"
                height={80}
                alt=""
              />
              <h5 className="my-3 section__sub__heading">
                No Transaction Fees
              </h5>
              <p>
                Say Goodbye to the high transaction fee as Paypenny incurs zero
                fees with no hidden charges or additional charges on your
                transactions.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow section2__card">
            <Card.Body>
              <img
                src="https://img.icons8.com/fluency/344/change.png"
                height={80}
                alt=""
              />
              <h5 className="my-3 section__sub__heading">
                Highest Exchange Rates Guaranteed
              </h5>
              <p>
                Paypenny provides you with the highest exchange interest rates
                in the industry. Send Money to India with the flexible exchange
                rates. day!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EarnSec1;
