import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
  
    render(){
        if (this.props.theNum.Horns === "1"){
            const arr = this.props.data.filter(element => element.horns === 1);
            return arr.map((element) => (
                <HornedBeast
         
                title = {element.title}
                img = {element.image_url}
                des = {element.description}
                handle = {this.props.handle}
                />
              ));
        } else if (this.props.theNum.Horns === "2"){
            const arr = this.props.data.filter(element => element.horns === 2);
            return arr.map((element) => (
                <HornedBeast
               
                title = {element.title}
                img = {element.image_url}
                des = {element.description}
                handle = {this.props.handle}
                />
              ));
        
        } else if(this.props.theNum.Horns === "3") {
            const arr = this.props.data.filter(element => element.horns === 3);
            return arr.map((element) => (
                <HornedBeast
            
                title = {element.title}
                img = {element.image_url}
                des = {element.description}
                handle = {this.props.handle}
                />
              ));
        } else if(this.props.theNum.Horns === "100") {
            const arr = this.props.data.filter(element => element.horns === 100);
            return arr.map((element) => (
                <HornedBeast
            
                title = {element.title}
                img = {element.image_url}
                des = {element.description}
                handle = {this.props.handle}
                />
              ));
        } else {
            return this.props.data.map((element) => (
                <HornedBeast
                
                title = {element.title}
                img = {element.image_url}
                des = {element.description}
                handle = {this.props.handle} />
            ))}
        }
      }
    

      
      
     
 
   
 






export default Main;