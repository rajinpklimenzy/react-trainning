import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";


class App extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            latitude:null,
            errorMessage:''
        }

        
    }

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
            (positon) => {
                this.setState({latitude:positon.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage:error.message})
            }
        );
        console.log('componentWillMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    render(){
        
       
            if(this.state.latitude && !this.state.errorMessage)
            {
                return(
                    <div><HemisphereDisplay latitude={this.state.latitude}/></div>
                     )
            }
            if (!this.state.latitude && this.state.errorMessage)
            {
                return(
                    <div>{this.state.errorMessage}</div>
                     )
            }
            else{
                return (<div>Loading.....</div>)
            }
           
       

    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)