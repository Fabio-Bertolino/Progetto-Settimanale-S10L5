import { Col, Container, Row } from "react-bootstrap";

const WeatherDetails = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center mt-5">
        <Col md={8}>
          <h1 className="display-3 text-white">
            Raindom<span className="text-info">App</span>
          </h1>
          <p className="text-light bg-opaque rounded-pill d-inline-block p-3">
            The only app that gets forecasts always wrong!
          </p>
          <h2 className="text-light display-5">Todays report: xx/xx/xxxx</h2>
          <hr className="text-light" />
          <p></p>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherDetails;
