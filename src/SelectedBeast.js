import React from 'react';

import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {


  
    
    render(){
return (
       
       
     <Modal show = {this.props.show} >
        <Modal.Header> {this.props.selectedBeast.title}</Modal.Header>
        <Modal.Body> {this.props.selectedBeast.desc}</Modal.Body> 
       <Modal.Footer>
       <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
       </Modal.Footer>
     </Modal>
    
)
}
}





export default SelectedBeast ;