import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";





class Weather extends React.Component {
    render() {
        const { dateTime, highTemp, lowTemp, currentTemp, description, icon, idx } = this.props;
        const DEGREES = '\u00b0';

        return (
            <>
                <Accordion >
                    <Accordion.Item eventKey={idx}>
                        <Accordion.Header>
                            <Row><img src={require(`./Img/${icon}.png`)} alt={description} /> {currentTemp}{DEGREES}C {dateTime}</Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>High of: {highTemp}{DEGREES}C</Col>
                                <Col>Low of: {lowTemp}{DEGREES}C</Col>
                            </Row>
                            <Row>
                                <Col>{description}</Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
        )
    }
}
export default Weather;