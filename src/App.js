
import React from 'react';
import Main from './main';
import Header from './header';
import Footer from './footer';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

import SelectedBeast from './SelectedBeast'
class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            displayModal: false,
            lilBeastieData: data,
            selectedBeast: {}
          }
        }
        showModal = (name) => {
      
          const selectedBeast = data.find(beast => beast.title === name);
          this.setState({selectedBeast, displayModal:true});
        }
        hideModal = () => {this.setState({displayModal: false});
        }
        
        presentFancyBeasts = (lilBeastieData) => {this.setState({lilBeastieData});
        }
render(){
return (
<div class="body">

<Header decrementTotal={this.decrementNumOfTotalTunas}/> 
   <div class= "contanier">
<Main data= {data} />
</div>
<SelectedBeast 
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
<Footer />


</div>

)
}

}

export default App;
