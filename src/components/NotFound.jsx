import { Col, Container, Row } from "react-bootstrap";
import { Tornado } from "react-bootstrap-icons";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Container className="pb-5">
      <Row className="justify-content-center text-center my-5">
        <Col md={8}>
          <h1 className="display-3 text-info mt-5">404 — Page Not Found!</h1>
          <p className="lead text-light bg-opaque rounded-pill p-3 my-5"> Maybe it was swept away by a hurricane?</p>
          <Tornado className="text-light display-1 text-end" />

          <Link to="/" className="btn btn-info m-5 text-light d-block">
            Go back Home!
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
