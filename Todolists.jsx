import React, { useEffect, useState } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';


function Todolists() {
    const [item,setitem]=useState(()=>{
        return ''
    })
    const [list,setlist]=useState(()=>{
        const getitem=localStorage.getItem('ITEMS');
        return JSON.parse(getitem);
    })

  useEffect(()=>{
    localStorage.setItem('ITEMS',JSON.stringify(list))
  },[list])

    const saveinput=(e)=>{
        setitem(e.target.value)

    }
    // const add=()=>{
    //     setlist((currentlist)=>{
    //         return[...currentlist,item]
    //     })
    //     setitem('')
    //     console.log(list)
    // }
   
  const add=()=>{
    const newitems=[...list,{id:crypto.randomUUID(),title:item}]
    setlist(newitems);
    console.log(list);
  }
  const  handlesubmit=(e)=>{
    e.preventDefault();
    setitem('')
}
  function del(id){

    setlist(currentitem=>{
        return currentitem.filter(list=>list.id!==id);
    })

  }
  const delall=()=>{
    localStorage.removeItem('ITEMS');
  }
  
  return (<>
    <form onSubmit={handlesubmit}>
    <div className='style'>Todolists</div>
    <div className='container'>
    <label className='additem' >ADD ITEM</label><br/>
    <input className='input' type='text' value={item} onChange={saveinput}/><br/><br/>
    <button className='button' onClick={add} >ADD</button>
    <br/>
    <br/>

    <ul className='lists'>
        {list.length ===0  && 'ENTER TASKS ' }
    {
        list.map((item)=><li key={item.id}>
            <label className='font'>
            <input className='checkbox' type='checkbox'/>
            {item.title}</label>
            <button className='btn btn-danger' onClick={()=>del(item.id)}>DELETE</button>
            </li>)
    }
    </ul>
    <button onClick={delall}>CLEAR ALL ITEMS</button>
    </div>
    </form>
   
    
    
</>
  )
}

export default Todolists