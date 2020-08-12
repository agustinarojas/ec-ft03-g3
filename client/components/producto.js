import React from 'react';
import Product from "../../api/src/models/Product.js"; 

export default function Product  ({ titulo, descripcion, precio, cantidad, imagen}) {
    
    return (
        <div>
            <h1>{titulo}</h1>
            <h3>{precio}</h3>
        <div>
            <p>{descripcion}</p>
        </div>
        <div>
            <h6 onClick = {} >Reviews {}</h6>
        </div>
        <div>
            <button>Add to cart</button>
        </div>
        <div>
            <image>{imagen}</image>
        </div>
        </div>
    );
}