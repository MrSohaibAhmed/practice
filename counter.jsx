import { useState } from "react";
import './counter.css'

function Counter(){

    var[value,setvalue]=useState(0)
    function increment(){
       setvalue(value+1);
       console.log(value+1);
    }
    function decrement(){
        setvalue(value-1);
        console.log(value-1);
    };
    return(

        <>
        <div className="center">
        <button type="button" onClick={increment}  className="btn btn-success">INCREMENT</button>
        <br></br>
        <br></br>
        <div className='value'>{value}</div>
        <br></br>
        <br></br>
        <button type="button" onClick={decrement}  className="btn btn-danger">DECREMENT</button>
        </div>
        
        </>

    )

}

export default Counter;