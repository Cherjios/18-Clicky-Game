import React from "react";
import "./style.css";

function Jumbotron (){
    return(
        <div className="jumbotron jumbotron-fluid bcolor">
        <div className="container">
          <h1 className="title">Clicky Game!</h1>
          <p className="subtitle">Click on an image to earn points, but don't click on any more than once!.</p>
        </div>
      </div>
       
    )

} 

export default Jumbotron;