import React from "react";


class Counter extends React.Component{
    // constructor(){
    //    super();
    //     this.state = {
    //         value:0
    //     }
    // }=>
    state={value:0};

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
         
        <div className="Counter__controls">
            <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
            </button>
            <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
            </button>
        </div>

        </div>
    }
    

}; 




export default Counter;
