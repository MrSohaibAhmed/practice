import { Alert } from "bootstrap";
import { useState } from "react";

function Myname(){

let name='SOHAIB AHMED';
const[alertvalue,setalertvalue]=useState(false);




return(                 
    <>
    <button onClick={setalertvalue(true) } className="btn btn-danger"> SHOW THE ALERT PLEASE</button>
   <Alert class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Hi  {name}</strong> You should check in on some of those fields below.
  <button type="button" onClick={setalertvalue(false)} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</Alert>
</>
)


}
export default Myname;