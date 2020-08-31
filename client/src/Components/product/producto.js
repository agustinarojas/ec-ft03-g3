import React, {useState} from 'react';
import './producto.css';
import {addToCart} from '../../Actions/index';
import {connect} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import BeautyStars from 'beauty-stars';
import Axios from 'axios';

export function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

function Products(producto) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(true);
	};
	const submitRate = (rate, idUser, idProd) => {
		// CAMBIAR DONDE HACE SUBMIT Y SACARLE EL HARDCODEO JAJA! AGREGAR COMENTARIOS. RENDERIZAR VALOR DE ESTRELLITA PROEDIO
		return Axios.post(`http://localhost:3005/products/${idUser}/review`, {
			rating: rate,
			descripcion: 'hola como estas xd',
			productId: idProd,
			userId: idUser,
		})
			.then(success => console.log(success))
			.catch(err => console.log(err));
	};
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<div className="wrapper">
			<div>
				<img src={producto?.producto[0]?.imagen} className="Imga" />
			</div>
			<div className="Description">
				<h1>{producto?.producto[0]?.titulo}</h1>
				<div>
					<p>{producto?.producto[0]?.descripcion}</p>
					<div>
						<p>Stock: {producto?.producto[0]?.stock}</p>
					</div>
				</div>
				<BeautyStars
					value={value}
					size={'24px'}
					gap={'6px'}
					activeColor={'66C3FF'}
					onChange={value => {
						setValue(value);
						submitRate(value, producto.user.id, 2);
					}}
				/>
				<div className="Precio">
					<h3>$ {producto?.producto[0]?.precio}</h3>
					<button
						type="button"
						className="btn btn-sm btn-primary float-right"
						variant="contained"
						color="primary"
						onClick={e => {
							handleClick();
							producto.addToCart(1, e.target.name);
						}}
						name={producto?.producto[0]?.id}
						disabled={producto?.producto[0]?.stock === 0 ? true : false}>
						{producto?.producto[0]?.stock === 0 ? 'Sin Stock' : 'Comprar'}
					</button>
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						<Alert onClose={handleClose} severity="success">
							Agregado al carrito!
						</Alert>
					</Snackbar>
				</div>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}
export default connect(mapStateToProps, {addToCart})(Products);
