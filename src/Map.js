import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Map extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                    <p>{this.props.locationData.display_name}</p>
                    <p>{this.props.locationData.lat}</p>
                    <p>{this.props.locationData.lon}</p>
                    </Row>
                    <Col>
                    </Col>
                </Container>
            </>
        );
    }
}
export default Map;