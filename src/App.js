
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
            show : false,
            selectedBeast: {}
          }
        }
        handle = (title, img, desc) => {
           // const selectedBeast = data.find(Element => Element.title === title);
            this.setState
            ({show : true,
                title: title,
                img: img,
                desc: desc,
            })
             }
             handleClose = () => {
                this.setState({
                    show : false
                })
            }  
render(){
return (
<div class="body">

<Header /> 
   <div class= "contanier">
<Main data= {data}
        handle = {this.handle} />
</div>
<SelectedBeast 
show = {this.state.show}
handleClose= {this.handleClose}

selectedBeast = {this.state}

/>

<Footer />

</div>

)
}

}

export default App;
