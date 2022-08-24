import React from 'react';
import Main from './main';
import Header from './header';
import Footer from './footer';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast'
import HornForm from './HornCount';

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            show : false,
            selectedBeast: {},
            Horns: ""
        }
        }
        handle = (title, img, desc) => {
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
            sendHorns = event => {
                this.setState({
                  Horns: event.target.value
                })

              }
render(){
return (
<div class="body">

<Header />

<HornForm sendHorns={this.sendHorns}/>
   <div class= "contanier">
<Main data= {data}
        handle = {this.handle}
        theNum = {this.state}

         />
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
