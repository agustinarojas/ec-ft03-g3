import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import BeautyStars from 'beauty-stars';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function OrderProducts({ ordersUser, match, user }) {
    const [state, setState] = useState(false);
    const [tarea, setTarea] = useState('');
    const [value, setValue] = useState(0);
    var ord = ordersUser?.filter(o => o?.id == match?.params?.id)
    var prods = ord[0]?.products
    var total = 0
    for (let i = 0; i < prods?.length; i++) {
        total += prods[i]?.precio * prods[i]?.lineorder?.cantidad
    }

    const submitRate = (idUser, idProd) => { // CAMBIAR DONDE HACE SUBMIT Y SACARLE EL HARDCODEO JAJA! AGREGAR COMENTARIOS. RENDERIZAR VALOR DE ESTRELLITA PROEDIO
        return Axios
            .post(`http://localhost:3005/products/${idUser}/review`, { rating: value, descripcion: tarea, productId: idProd, userId: idUser })
            .then(success => console.log(success))
            .catch(err => console.log(err))
    }
    var control;
    return (
        <div>
            <div style= {{width: '100%', backgroundImage: 'linear-gradient(90deg,whitesmoke, rgb(30, 147, 243))',  borderBottomRightRadius: '30px'}}>
                <h1>NRO ORDEN: {ord[0]?.id}</h1>
                <h3>Fecha: {ord[0]?.createdAt.slice(0, 10)}</h3>
                <h3>Hora: {ord[0]?.createdAt.slice(11, 19)}</h3>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Calificacion</th>
                    </tr>
                </thead>
                <tbody> {prods?.map(p =>
                    <tr>
                        <th style={{ width: '15%' }} scope="row">{p.titulo}</th>
                        <td style={{ width: '15%' }}>${p.precio}</td>
                        <td style={{ width: '15%' }}>{p.lineorder.cantidad} </td>
                        <td style={{ width: '25%' }}><img style={{ width: '45%' }} src={p.imagen} /></td>
                        <td style={{ width: '30%' }}>
                            <BeautyStars
                                value={value}
                                size={'24px'}
                                gap={'6px'}
                                activeColor={'66C3FF'}
                                onChange={(value) => setValue(value)}
                            />
                            <TextField style={{ marginTop: '8px', size: '6px' }} id="outlined-basic" label="Opinion" variant="outlined" name="body" onChange={(e) => setTarea(e.target.value)}></TextField>
                            {
                                !value || !tarea ? (control = true) : false
                            }
                            <Button variant="outlined" color="primary" style={{ marginLeft: '4px', marginTop: '8px' }} disabled={control ? true : false} onClick={() => { submitRate(user.id, p.id) }}>Calificar</Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <div style={{ display: "flex", marginLeft: '70%', marginRight: '12%', marginTop: '10px', backgroundColor: "rgb(30, 147, 243)", borderRadius: "7px", padding: "0.5%", color: "whitesmoke" }}>
                <h2 > TOTAL: ${total}</h2>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
	return {
		orders: state.orders,
		ordersUser: state.ordersUser,
		user: state.user,
	};
};
export default connect(mapStateToProps)(OrderProducts);
