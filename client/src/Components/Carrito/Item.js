import React, { useState, useEffect } from "react";
import "./Item.css";
import axios from "axios";
import { connect } from "react-redux";
import { getCarrito } from "../../Actions/index";

function Item({ productsCar, getCarrito }) {
  const [cantidad, setCantidad] = useState(1);
  const handleOnCLick = (id) => {
    setCantidad(cantidad - 1);
    axios
      .delete(`http://localhost:3005/users/1/cart/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  const handleOnCLickCantidad = (cantidad) => {
    setCantidad(cantidad + 1);
    console.log(cantidad);
    axios
      .put(`http://localhost:3005/users/1/cart`, { cantidad })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCarrito();
  }, [cantidad]);
  return (
    <div>
      {productsCar?.map((p) => (
        <ul className="list-group list-group-flush">
          <li class="list-group-item disp">
            <img className="imgCart" src={p.imagen} />
            <div className="titdes">
              <p>{p.titulo}</p>
              <p>{p.descripcion}</p>
            </div>
            <button
              className="btn botoncart"
              onClick={(e) => handleOnCLickCantidad(e.target.name)}
            >
              -
            </button>
            <p>{cantidad}</p>
            <button
              className="btn botoncart"
              onClick={(e) => handleOnCLickCantidad(e.target.name)}
            >
              +
            </button>
            <p>$ {cantidad} </p>
            <button name={p.id} onClick={(e) => handleOnCLick(e.target.name)}>
              X
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productsCar: state.productsCar,
  };
};
export default connect(mapStateToProps, { getCarrito })(Item);
