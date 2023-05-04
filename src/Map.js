import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Map extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                    <Col><p>{this.props.locationData.display_name}</p></Col>
                    <Col><p>{this.props.locationData.lat}</p></Col>
                    <Col><p>{this.props.locationData.lon}</p></Col>
                    </Row>
                    <Col>
                    <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONS}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`} alt={this.props.locationData.display_name} />
                    </Col>
                </Container>
            </>
        );
    }
}
export default Map;