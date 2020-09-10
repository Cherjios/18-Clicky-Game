import React from "react";
import "./style.css";

function ImgCard (props){
    return(
             <img alt={props.id} src={props.image}  className="img-thumbnail" onClick = {(e)=> props.imageCardClick(e) }/>        
    )

} 

export default ImgCard;