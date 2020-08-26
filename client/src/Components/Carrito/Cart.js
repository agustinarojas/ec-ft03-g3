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

function Cart({match, emptyCart, productsCar, getCarrito}) {
	const [can, setCantid] = useState(1);
	let userId = match?.params?.userId;
	function comprar() {
		return axios
			.put('http://localhost:3005/orders/1', {estado: 'completa'})
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
	console.log(productsCar);
	return (
		<div className="flexend">
			{productsCar?.map((p, i) => (
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
				/>
			))}
			<button id="compra" variant="outlined" color="primary" onClick={() => handleClickOpen()}>
				Vaciar
			</button>
			 <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Vaciar carrito"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ¿Estas seguro que deseas vaciar tu carrito?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={() =>{emptyCart(1); handleClose()} } color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
			<button id="compra" onClick={() => comprar}>
				Checkout
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		productsCar: state.productsCar,
	};
}
export default connect(mapStateToProps, {emptyCart, getCarrito})(Cart);
