import React, {useState} from 'react';
import './producto.css';
import {addToCart, getReviews} from '../../Actions/index';
import {connect} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import BeautyStars from 'beauty-stars';
import Axios from 'axios';
import {Link} from 'react-router-dom';

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
	const [state, setState] = useState(false);
	const [tarea, setTarea] = useState('');
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setOpen(true);
	};

	const submitRate = (idUser, idProd) => {
		// CAMBIAR DONDE HACE SUBMIT Y SACARLE EL HARDCODEO JAJA! AGREGAR COMENTARIOS. RENDERIZAR VALOR DE ESTRELLITA PROEDIO
		return Axios.post(`http://localhost:3005/products/${idUser}/review`, {
			rating: value,
			descripcion: tarea,
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

	const handleOnClick = () => {
		setCount(count + 1);
		console.log(count);
		if (count < 1) {
			setState(true);
		} else {
			setState(false);
		}
	};
	console.log(state);
	var control;
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
					<div className="califcs">
						<Link
							to={`/producto/${producto?.producto[0]?.id}/Calificaciones`}
							onClick={() => producto?.getReviews(producto?.producto[0]?.id)}>
							{/*{count < 2 ? <span>Calificar Producto</span> : <span>Ya realizaste una calificacion sobre este producto</span>}*/}
							<h6>Ver calificaciones</h6>
						</Link>
					</div>
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
		</div>
	);
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}
export default connect(mapStateToProps, {addToCart, getReviews})(Products);
