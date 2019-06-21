import React from "react";
import "./style.css";

function ImageStock(props) {
    return (
        <div className="card">
            <div className="img-container shuffle">
                <img alt={props.name} src={props.image} onClick={() => 
                {
                    props.clickHandler()
                }} />
            </div>       
        </div>
    )
}

export default ImageStock;