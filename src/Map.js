import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Map extends React.Component {

    render() {
        return (
            <>
                <Container>
                    <Row>
                    <Col><p>{this.props.location.display_name}</p></Col>
                    <Col><p>{this.props.location.lat}</p></Col>
                    <Col><p>{this.props.location.lon}</p></Col>
                    </Row>
                    <Col>
                    <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONS}&center=${this.props.location.lat},${this.props.location.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`} alt={this.props.location.display_name} />
                    </Col>
                </Container>
            </>
        );
    }
}
export default Map;