import React from 'react';
const username= 'John';
const Greetings = () =>{
const formattedDate= new Date().toLocaleDateString ('en-US' ,{
    weekday : 'long',
    day : 'numeric',
    month : 'long',
    year : 'numeric'
});
 return(
    <div>
        <h1>Hello, {username}</h1>
        <p>toda is {formattedDate}</p>
    </div>
 );
};
export default Greetings;

