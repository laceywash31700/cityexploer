import React from "react";
import Map from "./Map";
import Movies from "./Movie";
import Restaurants from "./Restaurants";
import Weather from "./Weather";
import { Container, Row, Col } from "react-bootstrap";


class Main extends React.Component {
    render() {
        
        const forCast = this.props.weather.map((day,idx) =>
        <Weather
        key = {idx}
        idx = {idx}
        dateTime = {day.dateTime}
        highTemp = {day.highTemp}
        lowTemp = {day.lowTemp}
        currentTemp = {day.currentTemp}
        icon = {day.weather.icon}
        description = {day.weather.description}
        />)
        const movies = this.props.movies.map((movie,idx) => 
        <Movies
            key ={idx}
            title = {movie.title}
            description = {movie.description}
            avg_like = {movie.avg_like}
            total_like = {movie.total_like}
            image = {movie.image}
            popularity = {movie.popularity}
            released = {movie.released}
        />
        )
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Map location={this.props.location} />
                        </Col>
                        <Col>
                        <h3>ForCast</h3>
                        {forCast}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Restaurants />
                        </Col>
                        <Col>
                        <h3>Movies</h3>
                        {movies}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Main;