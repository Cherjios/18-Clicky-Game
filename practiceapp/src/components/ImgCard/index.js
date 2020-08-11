import React from "react";
import "./style.css";

function ImgCard (props){
    return(
             <img alt={props.id} src={props.image}  className="img-thumbnail" />
             
    )

} 

export default ImgCard;