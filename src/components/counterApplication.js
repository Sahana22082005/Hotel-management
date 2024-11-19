import { Component } from "react";
class counterApplication extends Component{
    constructor(){
        super();
        this.setcount={
            count : 0
        }
    }
    increment=()=>{
        this.setState({
            count : this.setcount+1
        })
    }
    decrement=()=>{
        this.setState({
            count : this.setcount-1
        })
    }
    reset(){
        this.setState({
            count : 0
        })
    }

    render(){
        return(
            <div>
                <h1>{this.setState.count}</h1>
                <button onClick={()=>this.increment()}>+</button>
                <button onClick={()=>this.decrement()}>-</button>
                <button onClick={()=>this.reset()}>reset</button>
            </div>
        )
    }
}
export default counterApplication;