import React from "react";
import "./style.css";

function ImageStock(props) {
    return (
        <div className="card">
            <div className="img-container shuffle">
                <img id= {props.id} alt={props.name} src={props.image} onClick={((e) => props.clickHandler(e,props))} />
            </div>       
        </div>
    )
}

export default ImageStock;