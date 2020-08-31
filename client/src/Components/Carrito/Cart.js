import React, {useState, useEffect} from 'react';
import Item from './Item';
import axios from 'axios';
import './cart.css';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {emptyCart, getCarrito, addToCart} from '../../Actions/index';
import {Redirect} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  '& > * + *': {
		marginTop: theme.spacing(2),
	  },
	},
  }));

function Cart({emptyCart, productsCar, getCarrito, user, localStor, addToCart}) {
	const [can, setCantid] = useState(1);
	const [precio, setPrecio] = useState(0);
	const [redirect, setRedirect] = useState(false);
	let cart;
	let data = JSON.parse(localStorage.getItem('productos'));

	useEffect(() => {
		user.id && getCarrito(user.id);
		if (localStor) {
			console.log(localStor);
			localStor.map(prod => addToCart(user.id, prod.id, prod.lineorder.cantidad));
		}
	}, [user]);

	console.log('data: ' + data);
	console.log(localStor);
	if (user.id) cart = productsCar;
	else {
		cart = data;
	}
	useEffect(() => {
		console.log(cart);
		let total = cart?.reduce((total, producto) => {
			return total + producto.precio * producto.lineorder.cantidad;
		}, 0);
		setPrecio(total);
	}, [productsCar]);

	console.log(cart);
	console.log(user);
	console.log(productsCar);
	var total = {};
	// const handlePrice = function () {
	// 	// setPrecio(cant * precio);
	// 	// total[id] = cant * precio;
	// 	var precios = 0;
	// 	// for (let i = 0; i < Object.values(total).length; i++) {
	// 	// 	precios += Object.values(total)[i];
	// 	// }
	// 	for (let i = 0; i < cart.length; i++) {
	// 		console.log(cart);
	// 		precios = precios + cart[i].precio * cart[i].lineorder.cantidad;
	// 	}
	// 	var aux = precios;
	// 	setPrecio(aux);
	// 	// console.log(total);
	// 	console.log(aux);
	// 	//Abri la consola fijate que funciona, si renderizas el estado de precio, en la linea 54, del 'total', deja de funcionar no se porque, no le puedo hacer el setPrecio que funciona mal, fijate si podes agus :c
	// };
	// console.log(precio);

	function comprar() {
		return axios
			.put(`http://localhost:3005/orders/${user.id}`, {estado: 'completa'}, {withCredentials: true})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	const [open, setOpen] = React.useState(false);
	const [abrir, setAbrir] = React.useState(false);

	const handleClickOpen = () => {
		setAbrir(true);
	};

	const handleClose = () => {
		setAbrir(false);
	};
	if (redirect) {
		return <Redirect to="/" />;
	}
  
	const handleClick = () => {
	  setOpen(true);
	};
  
	const handleClosed = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }
  
	  setOpen(false);
	};
	return (
		<div className="flexend">
			{cart?.map((p, i) => (
				<Item
					titulo={p.titulo}
					descripcion={p.descripcion}
					imagen={p.imagen}
					precio={p.precio}
					id={p.id}
					stock={p.stock}
					cantidad={p.lineorder.cantidad}
					key={i}
					// hand={handlePrice}
				/>
			))}
			{cart?.length > 0 ? (
				<h2 id="total">TOTAL: $ {precio}</h2>
			) : (
				<div className="noProducts">Aún no agregaste productos al carrito.</div>
			)}
			{cart?.length > 0 ? (
				<button id="vaciar" onClick={() => handleClickOpen()}>
					Vaciar
				</button>
			) : (
				''
			)}
			<Dialog
				open={abrir}
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
							emptyCart(user.id);
							handleClose();
						}}
						color="primary">
						Aceptar
					</Button>
				</DialogActions>
			</Dialog>
			{cart?.length > 0 ? (
				<button
					id="compra"
					onClick={() => {
						handleClick();
						comprar();
						setTimeout(function () {
							setRedirect(true);
						}, 1000);
					}}>
					Checkout
					
				</button>
				
			) : (
				''
			)
			}
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClosed}>
						<Alert onClose={handleClosed} severity="success">
							Tu compra fue exitosa!
						</Alert>
					</Snackbar>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		productsCar: state.productsCar,
		user: state.user,
		localStor: state.localStorage,
	};
}
export default connect(mapStateToProps, {emptyCart, getCarrito, addToCart})(Cart);
