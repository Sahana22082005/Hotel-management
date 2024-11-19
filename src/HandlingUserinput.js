import { Component } from "react";

class HandlingUserinput extends Component
{
    constructor(props)
    {
        super(props);
      this.state={
        TextInput:"name"
      }  
    }
 inputChange=(abc)=>
    {
        this.setState({
            TextInput:abc.target.value
        })
    }   
textsubmit=(event)=>
{
    event.PreventDefault();
    alert(this.state.TextInput)
}
render()
{
    const buttonStyle ={
        fontSize:'12px',
        padding :'50px 10px',
        cursor:'pointer',
        backgroundColor : 'skyblue',
        border:'none',
        borderRadius:'7px'
    };
    return(
        <div>
            <form onSubmit={this.textSubmit}>
                <label>Enter Your Name: </label>
                <input type="text" abc={this.state.TextInput}  onChange={this.inputChange}/>
                <button type='submit' style={buttonStyle} >SIGN IN</button>
            </form>
            <p>{this.state.TextInput}</p>
        </div>
    )
}
}
export default HandlingUserinput;