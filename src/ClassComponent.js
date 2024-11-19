import { Component } from "react";

class AIDS extends Component
{
    // constructor(props)
    // {
    //      super(props)
    // }
    render()
    {
        return(
            <div>
                <h1>hey Team {this.props.name}</h1>
            </div>
        )
    }
}
class DEF extends Component
{
    // constructor(props)
    // {
    //     super(props)
    // }
    render()
    {
        return(
            <div>
                <AIDS name="sahana"/>
            </div>
        )
    }
}
export default DEF;