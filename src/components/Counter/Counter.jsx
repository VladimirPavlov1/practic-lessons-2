import React from "react";
import Control from "./Control";



class Counter extends React.Component{
    // constructor(){
    //    super();
    //     this.state = {
    //         value:0
    //     }
    // }=>
    static defaultProps ={
        initialValue:0
    }


    state={value:this.props.initialValue};

    handleIncrement=()=>{
        this.setState(prevState=>(
            {value: prevState.value + 1}
        ))
       
        
    }
    handleDecrement=()=>{
        this.setState(prevState=>(
            {value: prevState.value - 1}
        ))
    }

    render(){
        return <div className="Counter">
        <span Counter__value>{this.state.value}</span>
         
            <Control onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>

        </div>
    }
    

}; 




export default Counter;
