import React from "react";
import { Table } from "react-bootstrap";

const EarnTable = () => {
  return (
    <Table striped bordered responsive hover data-aos="fade-right">
      <thead>
        <tr>
          <th>Duration</th>
          <th>ROI (per annum)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10 days</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>15 days</td>
          <td>11%</td>
        </tr>
        <tr>
          <td>30 days</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>45 days</td>
          <td>13%</td>
        </tr>
        <tr>
          <td>60 days</td>
          <td>14%</td>
        </tr>
        <tr>
          <td>90 days</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>180 days</td>
          <td>17%</td>
        </tr>
        <tr>
          <td>365 days</td>
          <td>25%</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EarnTable;
