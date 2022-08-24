import React from 'react';
import HornedBeast from './HornedBeast';

/*let databeast = data.map(element => 
    <HornedBeast
    key = {element._id}
    title = {element.title}
    img = {element.image_url}
    des = {element.description}/>
    );*/
class main extends React.Component{
  
    render(){
    return (
     
        this.props.data.map( element => 
    <HornedBeast
    key = {element._id}
    title = {element.title}
    img = {element.image_url}
    des = {element.description}/>
    )
   
    )



}
}


export default main;