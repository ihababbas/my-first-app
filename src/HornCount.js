import React from 'react';
import Form from 'react-bootstrap/Form';


class HornForm extends React.Component {
 


  render() {
    return (
      <>
        <Form >
          <Form.Group controlId="hornSelector">
            <Form.Label>Number of Horns</Form.Label>
            <Form.Select onChange = {this.props.sendHorns} >
              <option value="0">All the horns!</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Or more horns!</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default HornForm;