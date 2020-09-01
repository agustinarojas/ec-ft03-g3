import React from 'react';
import { connect } from 'react-redux';

function Order({ orders, match }) {
  console.log(orders)
    var ord = orders?.filter(o => o?.id == match?.params?.id)
    var prods = ord[0]?.products
    var total = 0
    for (let i=0; i < prods?.length; i++) {
        total += prods[i]?.precio * prods[i]?.lineorder?.cantidad
    }
    return (
        <div>
            <h1>NRO ORDEN: {ord[0]?.id}</h1>
            <h1>ID USUARIO: {ord[0]?.userId}</h1>
            <h3>Fecha: {ord[0]?.createdAt.slice(0, 19)}</h3>
            <div>
                Productos: {prods?.map(p =>
                <div key = {p.id}>
                    <p>{p.titulo} {p.precio} {p.id} {p.lineorder.cantidad} </p>
                </div>
                )}
         </div>
            <h2>TOTAL : {total}</h2>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orders,
    };
};
export default connect(mapStateToProps)(Order);
