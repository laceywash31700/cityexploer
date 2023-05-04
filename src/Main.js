import React from "react";
import Map from "./Map";
import Movies from "./Movie";
import Restaurants from "./Restaurants";
import { Container, Row, Col } from "react-bootstrap";

class Main extends React.Component {
    render() {
        return (
            <>
                    <Container>
                        <Col>
                            <Map locationData = {this.props.locationData}/>
                        </Col>
                        <Row>
                            <Col>
                                <Restaurants locationData ={this.props.locationData}/>
                            </Col>
                            <Col>
                                <Movies locationData ={this.props.locationData}/>
                            </Col>
                        </Row>
                    </Container>
            </>
        )
    }
}

export default Main;