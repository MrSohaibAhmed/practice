import { useState } from "react";
import {Link } from "react-router-dom";


function MyNav(){


return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/counter'>COUNTER</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/profile'>profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/login'>LOGIN</Link>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#"  aria-disabled="true">CARDS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>    

)

}

export default MyNav;