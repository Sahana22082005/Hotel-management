function ParentComponent()
{
    return(
        <div>
            <h1>Hii I'm Parent</h1>
            <ChildComponent name="Sahana" reg="131" dept="AI&DS"/>
        </div>
    )
}
function ChildComponent(props)
{
        return(
            <div>
                <h2>Name: {props.name}</h2>
                <h2>Reg no: {props.reg}</h2>
                <h2>Dept: {props.dept}</h2>
            </div>
        )
}
export default ParentComponent;