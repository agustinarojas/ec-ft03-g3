import React, {useState, useEffect} from 'react';
import Item from './Item';
import axios from 'axios';
import './cart.css';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {emptyCart, getCarrito} from '../../Actions/index';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Cart({match, emptyCart, productsCar, getCarrito, user}) {
	const [can, setCantid] = useState(1);
	const [precio, setPrecio] = useState(0);
	let userId = match?.params?.userId;
	let cart;
	let data = JSON.parse(localStorage.getItem('productos'));
	console.log(data);

	var total = {};
	console.log(productsCar);
	const handlePrice = function (cant, id, precio) {
		// setPrecio(cant * precio);
		// total[id] = cant * precio;
		var precios = 0;
		// for (let i = 0; i < Object.values(total).length; i++) {
		// 	precios += Object.values(total)[i];
		// }
		for (let i = 0; i < productsCar.length; i++) {
			console.log(productsCar);
			precios = precios + productsCar[i].precio * productsCar[i].lineorder.cantidad;
		}
		var aux = precios;
		setPrecio(aux);
		// console.log(total);
		console.log(aux);
		//Abri la consola fijate que funciona, si renderizas el estado de precio, en la linea 54, del 'total', deja de funcionar no se porque, no le puedo hacer el setPrecio que funciona mal, fijate si podes agus :c
	};

	console.log(precio);
	function comprar() {
		return axios
			.put('http://localhost:3005/orders/1', {estado: 'completa'}, {withCredentials: true})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		getCarrito(userId);
	}, [can]);
	return (
		<div className="flexend">
			{((cart = user.id !== null ? productsCar : data), console.log(cart))}
			{cart?.map((p, i) => (
				<Item
					match={match}
					titulo={p.titulo}
					descripcion={p.descripcion}
					imagen={p.imagen}
					precio={p.precio}
					id={p.id}
					stock={p.stock}
					cantidad={p.lineorder.cantidad}
					key={i}
					hand={handlePrice}
				/>
			))}
			{cart.length > 0 ? (
				<h2 id="total">
					TOTAL: $
					{cart?.reduce((total, producto) => {
						return total + producto.precio * producto.lineorder.cantidad;
					}, 0)}
				</h2>
			) : (
				<div className="noProducts">Aún no agregaste productos al carrito.</div>
			)}
			{cart.length > 0 ? (
				<button id="vaciar" onClick={() => handleClickOpen()}>
					Vaciar
				</button>
			) : (
				''
			)}
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description">
				<DialogTitle id="alert-dialog-slide-title">{'Vaciar carrito'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						¿Estas seguro que quieres vaciar el carrito?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancelar
					</Button>
					<Button
						onClick={() => {
							emptyCart(1);
							handleClose();
						}}
						color="primary">
						Aceptar
					</Button>
				</DialogActions>
			</Dialog>
			{cart.length > 0 ? (
				<button id="compra" onClick={() => comprar()}>
					Checkout
				</button>
			) : (
				''
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		productsCar: state.productsCar,
		user: state.user,
	};
}
export default connect(mapStateToProps, {emptyCart, getCarrito})(Cart);
