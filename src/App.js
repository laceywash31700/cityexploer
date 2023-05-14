import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Error from "./Error";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
      city: '',
      location: null,
      weather: null,
      movies: null,
      restaurants: null,
      err1: null,
      err2: null,
      err3: null
    }
  }

  handleCity = (e) => {
    this.setState({ city: e.target.value }
      , () => console.log(this.state.city)
    )
  }


  displayWeather = (lat, lon) => {
    let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`
    axios.get(url)
      .then(res => {
        const weather = res.data
        this.setState({
          weather: weather,
          error2: null
        }, () => console.log(this.state.weather))
      })
      .catch(err => {
        const error2 = err.message
        this.setState({
          err2: error2,
          weather: null
        }, () => console.err(this.state.err2))
      })
  }


  displayMovies = (city) => {
    let url = `${process.env.REACT_APP_SERVER}/movies?city=${city}`
    axios.get(url)
      .then(res => {
        const movies = res.data
        this.setState({
          movies: movies,
          error3: null
        }, () => console.log(this.state.movies))
      })
      .catch(err => {
        const error3 = err.message
        this.setState({
          err3: error3,
          movies: null
        }, () => console.error(this.state.err3))
      })
  }





  displayLocation = (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONS}&q=${this.state.city}&format=json`
    axios.get(url)
      .then(res => {
        const location = res.data[0]
        this.setState({
          display: true,
          location: location,
          error1: null
        }, () => console.log(this.state.location))
        let currentLat = location.lat;
        let currentLon = location.lon;
        this.displayWeather(currentLat, currentLon);
      })
      .catch(err => {
        const error1 = err.message
        this.setState({
          display: false,
          err1: error1,
          location: null
        }, () => console.error(this.state.err1) )
      })
    this.displayMovies(this.state.city);
  }


  render() {
    const { err1, err2, err3, location, weather, movies , display, city} = this.state;
    return (
      <>
        <Container>
          <Header />
          <Form onSubmit={this.displayLocation}>
            <Form.Group>
              <Form.Label>Find Movies And Restaurants</Form.Label>
              <Container>
                <Row>
                  <Col><Form.Control type='text' placeholder="Enter City" onChange={this.handleCity} /></Col>
                  <Col><Button type="submit">Explore!</Button></Col>
                </Row>
              </Container>
            </Form.Group>
          </Form>
          {(location && weather) && display
            ? <Main
              location={location}
              weather={weather}
              movies={movies}
              city = {city}
            />
            : (err1 || err2 ||err3) && !display 
              ? <Error 
                err1={err1}
                err2={err2}
                err3={err3} />
              : null}
          <Footer />
        </Container>
      </>
    );
  }
}
export default App;
