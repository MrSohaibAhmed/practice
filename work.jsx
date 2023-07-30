import React from 'react'
import { useState } from 'react'
function Work() {
         const[number,setnumber]=   useState([])
        const[input,setinput]=   useState('')

        const additem=()=>{
            setnumber([...number,Number(input)])
            console.log(number);
        }


  return (<>
    <div>IN SHA ALLAH</div>
<input name='number' value={input} type='number' onChange={(e)=>{setinput(e.target.value)}}></input>
<button onClick={additem}>ADD ITEM</button>
<ul>
{
    number.map((item)=>
        (<li key={item.id}>{item}</li>)
    )
}</ul>
 {/* <ul>
      {number.map(item => (
        <li key={item.id}>{item}</li>
      ))}
    </ul> */}
{/* </ul> */}

    </>
  )
}

export default Work