import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <Container fluid>
            <Row className="d-flex text-center">
                <h1>Welcome to the Marvel Universe!</h1>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
                <Card className="text-center" style={{ width: '24rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Explore the Marvel Universe by browsing through the characters and comics.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="shadow-effect" href="/browse">Browse Characters</Button>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    );
}