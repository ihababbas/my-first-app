import React from 'react';

import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
    constructor(props) {
        super(props); 
    this.state = {
     show: false
    }
}
    handle() {
   this.setState({show: !this.state.show})
    }
    
    render(){
return (
       
    <div>   
    <Button onClick={()=>{this.handle()}}>open model</Button>
     <Modal show = {this.state.show} >

        <Modal.Header> head part</Modal.Header>
        <Modal.Body> HI HI HI</Modal.Body> 
       <Modal.Footer>
       <Button onClick={()=>{this.handle()}} >close</Button>
       </Modal.Footer>
     </Modal>
     </div>
)
}
}





export default SelectedBeast ;