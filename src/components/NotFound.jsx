import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

const NotFound = () => {
  return (
    <Container className="text-center mt-5 bg-white rounded not-found">
      <Row>
        <Col>
          <h1 className="text-danger">404 - Page Not Found</h1>
          <p className="text-muted">Oh, snap. This page does not exist.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Image src="src/assets/thanos-snap-featured-120518-2.jpg" rounded fluid alt="Not Found" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button className ="mb-3 p-3 shadow-lg rounded"  as={NavLink} to="/home" variant="primary">
            Go to Homepage
          </Button>
          {/* <button className="shadow-effect" type="submit">Submit </button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;