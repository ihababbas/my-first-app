import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';



class HornedBeast extends React.Component
{
    constructor(props) {
        super(props); 
        this.state = {
            numOfPets : 0
        }
    }

    incrementNumOfPets = () => {
        this.setState({
            numOfPets : this.state.numOfPets + 1
 
        }  )
        
    }
 
 render(){ 
  
 
    return(
        <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={this.props.img} alt = {this.props.title} onClick={this.incrementNumOfPets} />
      <Card.Body>
        <Card.Title> {this.props.title}</Card.Title>
        <Card.Text>
        {this.props.des}
        </Card.Text>
        <Card.Text>
        😸 Num of pets: {this.state.numOfPets}
        </Card.Text>
        <Button onClick={() =>{this.props.handle(this.props.title,this.props.img,this.props.des)}} variant="info"> more data</Button>
      </Card.Body>
    </Card>
 
    )
 }
}

export default HornedBeast ;

