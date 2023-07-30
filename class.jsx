import React from "react";

function Apps(props){

        const allname=["superman","batman","spiderman","thor","ironman","captain-america"]  ;
        const heroes=allname.map((hero,index) =><h3 key={hero}>`{index}{hero} is most famous from his verse`</h3>)  
    const {name}=props;
 console.log(props);

return (<>
    <div >`{heroes}`</div>

    <h1>MY NAME IS {name} </h1> 

    </>
)

}




export default Apps;