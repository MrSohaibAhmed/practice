import React from 'react'
import { useState } from 'react'

function Hooks() {


  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = () => {
    // event.preventDefault();
    if(itemName>0 || itemName==0){
    setItems([...items, Number(itemName)]);}
    // setItemName("");
    console.log(items)
  };

  // const[number,setnumber]=useState([])
  // const[numbervalue,setnumbervalue]=useState("")


  // const newnumber=parseInt(document.getElementById('number').value);
  // const addnumber=(event)=>{
  //   event.preventDefault();
  //   setnumber([...number,parseInt(numbervalue)
    //  number: event.target.value
    // ])
    // ...number,{
    //   id:number.length,
    //   value:event.target.value  
    // }
    
  //   setnumbervalue('');

  // console.log(number);

  // }
  // const handlesubmit=(event)=>{
  //   event.preventDefault
  // }
// const [name,setname]=useState({firstname:"ali",lastname:"hassan "})

  return (

    <div>
    <h1>Enter values in an empty array</h1>
    <input
  name="item"  type="number"  value={itemName }  onChange={e => setItemName(e.target.value)} />
    <button onClick={addItem}>Add Item</button>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
  </div>
  //   <>
  //   <form onSubmit={handlesubmit}>
  //   <input name='item' type='number' id="number" value={numbervalue} onChange={(e)=>{
  //     setnumbervalue(e.target.value)
  //   }} ></input>
   
  //   <button onClick={addnumber}>ADD</button>
  //   {(numbervalue>0 || numbervalue<0 || numbervalue==0)?
  //   addnumber():<div>enter a valid value</div>
  // }
  // </form>
  //  <ul> {
      
  //       number.map((item)=>{
  //         <li>{item.name}</li>
  //       })
  //   }
  //   </ul>
    
    /* <input type ="text" value={name.firstname} onChange={(event)=>setname({...name,firstname:event.target.value})}></input>
    <input type ="text" value={name.lastname} onChange={(event)=>setname({...name,lastname:event.target.value})}></input>
    {
        <h2>your first name is {name.firstname} and lastname is {name.lastname}</h2>
        
    }
    {
        // <h2>{JSON.stringify(name)}</h2>
// } */
    
  //   </>
  )
}

export default Hooks