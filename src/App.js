
import React from 'react';
import Main from './main';
import Header from './header';
import Footer from './footer';
import data from './data.json';

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            test : 'hi'
        }
        }
            word = () => {
                this.setState({
                    tset : "bye"
                })
        }
render(){
return (
<div class="body">

<Header decrementTotal={this.decrementNumOfTotalTunas}/> 
   <div class= "contanier">
<Main data= {data} />
</div>

<Footer />


</div>

)
}

}

export default App;
