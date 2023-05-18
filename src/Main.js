import React from "react";
import Map from "./Map";
import Movies from "./Movie";
import Restaurants from "./Restaurants";
import Weather from "./Weather";
import { Container, Row, Col } from "react-bootstrap";


class Main extends React.Component {
    render() {
        const {location,weather,movies,city} = this.props

        const foreCast = weather.data.map((day,idx) =>
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
        
        const moviesData = movies.data.map((movie,idx) => 
        <Movies
            key ={idx}
            title = {movie.title}
            description = {movie.description}
            avg = {movie.avg}
            total_likes = {movie.total_likes}
            image = {movie.image}
            released = {movie.released}
        />
        )
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Map location={location} />
                        </Col>
                        <Col>
                        <h3>Weekly Forecast</h3>
                        {foreCast}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Restaurants city={city}/>
                        </Col>
                        <Col>
                        <h3>Movies</h3>
                        {moviesData}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Main;