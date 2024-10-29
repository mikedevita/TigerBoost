import { Col, Row } from "react-bootstrap";
import { PowerChart } from "../components/PowerChart";

export function HomePage() {
  return (
    <>
      <Row>
        <Col>
          <h1>Grass City 1.0</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Power Chart</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <PowerChart />
        </Col>
      </Row>
    </>
  );
}
