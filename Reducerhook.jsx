import React, { useReducer } from 'react'


const initialstate=0;
const reducer=(currentstate,action)=>{
    switch(action){
        case 'increment':
            return currentstate+1;
            case 'reset':
                return initialstate;
                default:
                    return currentstate;
    }
    return newstate;
}
function Reducerhook() {

   const[newstate,dispatch]= useReducer(reducer,initialstate)

  return (<>
    <div>Reducerhook {newstate}</div>
    <button onClick={()=>{dispatch('increment')}}>increment</button>
    <button onClick={()=>{dispatch('reset')}}>reset</button>
    </>
  )
}

export default Reducerhook