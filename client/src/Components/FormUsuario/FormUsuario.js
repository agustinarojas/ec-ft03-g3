import React, {useState} from 'react';
import axios from 'axios';
import './Form.css';
import {addToCart} from '../../Actions/index';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';

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

function FormUsuario({addToCart}) {
	//const [email, setEmail] = useState({email: ''});
	const [state, setState] = useState({});

	const handleOnChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (event, state) => {
		event.preventDefault();
		axios
			.post('http://localhost:3005/users', state)
			.then(res => {
				if (localStorage.getItem('productos') !== null) {
					let products = JSON.parse(localStorage.getItem('productos'));
					products.map(prod => addToCart(res.data.id, prod.id));
					localStorage.clear();
				}
			})
			.catch(error => console.log(error));
	};
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(true);
	};
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<div className="Formm">
			<form onSubmit={e => handleSubmit(e, state)}>
				<div className="form-group">
					<label htmlFor="exampleInputNombre">Nombre</label>
					<input
						name="nombre"
						type="text"
						className="form-control"
						id="exampleInputNombre"
						onChange={e => handleOnChange(e)}
					/>
					<label htmlFor="exampleInputApellido">Apellido</label>
					<input
						name="apellido"
						type="text"
						className="form-control"
						id="exampleInputApellido"
						onChange={e => handleOnChange(e)}
					/>
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						name="email"
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={e => handleOnChange(e)}
					/>
					<label htmlFor="exampleInputPassword">Contraseña</label>
					<input
						name="password"
						type="password"
						className="form-control"
						id="exampleInputPassword"
						onChange={e => handleOnChange(e)}
					/>
					<small id="emailHelp" className="form-text text-muted">
						No compartiremos tus datos con nadie.
					</small>
				</div>
				<button
					onClick={handleClick}
					variant="contained"
					color="primary"
					type="submit"
					value="Submit">
					Submit
				</button>
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success">
						Usuario creado!
					</Alert>
				</Snackbar>
			</form>
		</div>
	);
}

export default connect(null, {addToCart})(FormUsuario);
