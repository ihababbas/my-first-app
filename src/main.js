import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  
    render(){
    return (
     
        this.props.data.map((element,id) => 
    <HornedBeast
    key = {id}
    title = {element.title}
    img = {element.image_url}
    des = {element.description}
    handle = {this.props.handle}
    />
    )
   
    )



}
}


export default Main;