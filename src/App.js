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
      locationData: null,
      weather: null,
      movies: null,
      error1: null,
      error2: null,
      error3: null
    }
  }

  handleCity = (e) => {
    this.setState({ city: e.target.value }
      , () => console.log(this.state.city)
    )
  }

  displayLocation = async (e) => {
    e.preventDefault();
    let currentLat;
    let currentLon;
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONS}&q=${this.state.city}&format=json`
      const displayData = await axios.get(url)
      currentLat = displayData.data[0].lat
      currentLon = displayData.data[0].lon
      this.setState({
        display: true,
        locationData: displayData.data[0],
        error1: null
      }, () => console.log(this.state.locationData));
    } catch (error) {
      console.error(error);
      this.setState({
        display: false,
        locationData: null,
        error1: error
      });
    }
    this.displayWeather(currentLat,currentLon);
    this.displayMovies(this.state.city);
  }

  displayWeather = async (lat,lon) => {
    try{
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`
      const weatherData = await axios.get(url)
      this.setState({
        weather: weatherData.data,
        error2: null
      }, () => console.log(this.state.weather))
    }
    catch (error) {
      console.error(error);
      this.setState({
        error2: error,
        weather: null
      })
    }
  }

  displayMovies = async (city) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?city=${city}`
      const movieData = await axios.get(url)
      this.setState({
        movies: movieData.data,
        error3: null
      }, () => console.log(this.state.movies))
    }
    catch(error){
      console.error(error);
      this.setState({
        error3:error,
        movies: null
      })

    }

  }

  render() {
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
          {this.state.display
          ? <Main 
          locationData={this.state.locationData} 
          weather = {this.state.weather}
          movies = {this.state.movies}
          />
          : this.state.error && !this.state.display 
          ? <Error 
            error1={this.state.error1}
            error2={this.state.error2}
            error3={this.state.error3}
            /> 
          : null}
          <Footer />
        </Container>
      </>
    );
  }
}
export default App;
