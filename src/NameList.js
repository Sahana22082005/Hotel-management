function Person({person})
{
    return (
        <h2>
            My id is{person.id} I am {person.name}.
        </h2>
    )
}
function NameList()
{
    const persons=[
        {
            id:1,
            name:'Deepika',
            age:30,
            skill:'React',
        },
        {
            id:2,
            name:'Michael',
            age:28,
            skill:'Java'
        }
    ];
    // const personList=persons.map(person=>(<h2>I am {person.name}. I am {person.age}</h2>)
    const personList=persons.map(person=>(<Person key={person.name}>))
    return(
        {/* <div>
          {
    
            names.map(names=> <h2>{names}</h2>)
         }
         </div> */}
        <div>
           {personList}
      </div>   
    )
}
export default NameList;
