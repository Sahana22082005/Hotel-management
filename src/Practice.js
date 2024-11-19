const sum = (a,b)=>a+b;
const mul = (a,b)=>a*b;
const calculator=(type)=>
{
    if(type == 'sum')
    {
        return sum;
    }
    else 
    {
        return mul;
    }
}
const ans=calculator('sum')(4,5)
const ans2=calculator('mul')(4,5)
const Finalcalculator=()=>
{
    return(
        <div>
            <h1>{ans}</h1>
            <h1>{ans2}</h1>
            <Hello/>
            <MyButtonComponent/>
        </div>
    )
}
export default Finalcalculator;
const MyButtonComponent = () => {
    const handleClick = () => {
    //   alert("Button Clicked!");
    };
    return (
        <div>
          <button style={{backgroundColor:'orange'}}onClick={handleClick}>Click Me</button>
        </div>
      );
    };    
function Hello()
{
    return(
        <h1 style={{color:'magenta'}}>Hello</h1>
        
    )
}
// export default Hello;