
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
  
render(){
return (
<div class="body">

<Header /> 
   <div class= "contanier">
    
<Main data= {data} />
</div>
<SelectedBeast />
<Footer />


</div>

)
}

}

export default App;
