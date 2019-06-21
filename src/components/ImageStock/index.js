import React from "react";
import "./style.css";

function ImageStock(props) {
    return (
        <div className="card">
            <div className="img-container shuffle">
                <img alt={props.name} src={props.image} onClick={() => 
                {
                    if(props.clicked)
                    {
                        //Set everything original
                    }
                    else
                    {
                        props.clicked = true;
                        props.handleIncrement();
                    }
                    props.shuffleImages()
                }} />
            </div>       
        </div>
    )
}

export default ImageStock;