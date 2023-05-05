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
      error: null
    }
  }

  handleCity = (e) => {
    this.setState({ city: e.target.value }
      , () => console.log(this.state.city)
    )
  }

  displayResults = async (e) => {
    e.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONS}&q=${this.state.city}&format=json`
      const displayData = await axios.get(url)
      this.setState({
        display: true,
        locationData: displayData.data[0],
        error: null
      });
    } catch (error) {
      console.error(error);
      this.setState({
        display: false,
        locationData: null,
        error: error
      });
    }
  }

  render() {
    return (
      <>
        <Container>
          <Header />
          <Form onSubmit={this.displayResults}>
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
          {
          this.state.display
          ? <Main locationData={this.state.locationData} />
          : this.state.error && !this.state.display 
          ? <Error error={this.state.error}/> 
          : null}
          <Footer />
        </Container>
      </>
    );
  }
}
export default App;
