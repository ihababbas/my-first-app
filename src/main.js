import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
let databeast = data.map(element => 
    <HornedBeast
    key = {element._id}
    title = {element.title}
    img = {element.image_url}
    des = {element.description}/>
    );
class main extends React.Component{
  
    render(){
    return (
        <div class="contanier">
        {databeast}
      
      </div>


        )



}
}


export default main;