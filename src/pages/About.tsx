import {Carousel, Col, Row} from "react-bootstrap";

const About = () => {
    return (
        <div className="mt-5 text-nord-6">
            <h1>About Me</h1>
            <p className="mt-3">
                This is the about page.
            </p>
            <Row xs={12} md={6} lg={4} className="justify-content-center">
                <Col>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://placehold.co/200x400"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://placehold.co/200x400"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}

export default About;
