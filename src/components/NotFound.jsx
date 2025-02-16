import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center mt-5">
        <Col md={8}>
          <h1 className="display-3 text-info">404 — Page Not Found!</h1>
          <p className="lead text-light bg-opaque rounded-pill d-inline-block p-3">
            {" "}
            Maybe it was swept away by a hurricane?
          </p>

          <Link to="/" className="btn btn-info m-5 d-block text-light">
            Go back Home!
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
