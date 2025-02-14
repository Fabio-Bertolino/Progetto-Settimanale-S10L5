import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <Container fluid className="bg-dark pt-3 text-white">
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={"auto"} className="text-center text-md-start text-secondary">
          <div>
            <Link to="/404">
              <Facebook className="text-secondary fs-4 me-2" />
            </Link>
            <Link to="/404">
              <Instagram className="text-secondary fs-4 me-2" />
            </Link>
            <Link to="/404">
              <Twitter className="text-secondary fs-4 me-2" />
            </Link>
            <Link to="/404">
              <Youtube className="text-secondary fs-4" />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={2} className="text-center text-md-start">
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Link
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Link
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Link
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Link
          </Link>
        </Col>
        <Col xs={12} md={2} className="text-center text-md-start">
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Link
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Investor Relations
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Legal notices
          </Link>
        </Col>
        <Col xs={12} md={2} className="text-center text-md-start">
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Help Center
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Jobs
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Cookie areferences
          </Link>
        </Col>
        <Col xs={12} md={2} className="text-center text-md-start">
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Link
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Terms of Use
          </Link>
          <Link to="/404" className="text-secondary link-underline link-underline-opacity-0 d-block py-2">
            Corporate informations
          </Link>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
      <Row className="pt-4 pb-3">
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={"auto"} className="text-center text-md-start text-secondary">
          <Button variant="outline-secondary" size="sm" className="rounded-0">
            Service Code
          </Button>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={"auto"} className="text-center text-md-start text-secondary">
          <p className="text-secondary">&copy 1997-2019 RaindomApp, inc. &#123;i=############&#125;</p>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
