import { Component } from "react";

class MouseHover extends Component
{
    constructor()
    {
        super();
            this.state={
                isHovered:false,
                buttonText:'Hover Me'
            };
        }
        handlingMouseEnter=()=>
        {
            this.setState({
                isHovered:true,
                buttonText:'Hello,I am hovered!'

            });
        }
        handlingMouseLeave=()=>
        {
            this.setState({
                isHovered:false,
                buttonText:'Hover Me'
            });
        }
        
    
    render()
    {
        const buttonStyle ={
            fontSize:'16px',
            padding :'10px 20px',
            cursor:'pointer',
            backgroundColor : this.state.isHovered?'yellow':'white',
            color:'black',
            border:'none',
            borderRadius:'5px'
        };
        return(
            <button style={buttonStyle} onMouseEnter={this.handlingMouseEnter}onMouseLeave={this.handlingMouseLeave}>{this.state.buttonText}</button>
        )
    }
}
export default MouseHover;