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
          <p className="text-muted">The page you are looking for does not exist.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Image src="https://via.placeholder.com/400x300" rounded fluid alt="Not Found" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button className ="mb-4" as={NavLink} to="/home" variant="primary">
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;