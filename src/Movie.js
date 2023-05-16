import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  starValue = (avg) => {
    let numberOfStars = Math.floor(avg); 
    const star = '⭐';
    let output = ''
   for(let i=0; i < numberOfStars; i++){
      output += star
   }
   return output
  }
    render() {
      const {avg,description,image,popularity,released,title,total_likes} = this.props;
        return (
            <>
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description} </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{``}{this.starValue(avg)}</ListGroup.Item>
        <ListGroup.Item>{total_likes}</ListGroup.Item>
        <ListGroup.Item>{released}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
            </>
        );
    }
}
export default Movies;