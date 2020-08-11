import React from "react";
import "./style.css";

function ImgCard (props){
    return(
        <div>
             <img alt={props.id} src={props.image}  className="img-thumbnail"/>
        </div>
    )

} 

export default ImgCard;