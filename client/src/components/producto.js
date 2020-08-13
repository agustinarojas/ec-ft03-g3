  
import React from 'react';


export default function Products ({ titulo, descripcion, precio, cantidad, imagen}) {
    return (
        <div>
            <h1>{titulo}</h1>
            <h3>{precio}</h3>
        <div>
            <p>{descripcion}</p>
        </div>
        <h6>reviews</h6>
        <div>
        <div>
            <p>{cantidad}</p>
        </div>
            <button>Add to cart</button>
        </div>
        <div>
            <image>{imagen}</image>
        </div>
        </div>
    );
}