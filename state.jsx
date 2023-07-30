import { useState } from "react";
import React,{Component} from "react";


function Message(){
    

    const[state,setstate]=useState(0);

    // const newmessage="thanks for subscribing!!!!"
    function increment(){
            setstate(state+1);
        console.log(state);


    }

    function decrement(){
        setstate(state-1);
        console.log(state);
    }
    if(state<0){
          increment();
    }
return(
<>
    <h1>{state}  SUBSCRIBERS</h1>
    <button className="btn btn-success" onClick={increment}>SUBSCRIBE</button>
    <button className="btn btn-danger" onClick={decrement}>UNSUBCIBE</button>
    </>
)

}

export default Message;