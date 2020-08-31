import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { addToCart } from '../../Actions/index';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

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

function FormUsuario() {
	const [state, setState] = useState({});
	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState(false)
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
				if (res.data.error) {
					setError(true)
				} else { setError(false) }
			})
			.catch(error => console.log(error))
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
	if (redirect && !error) {
		return <Redirect to="/login" />;
	}
	var control;
	return (
		<div className="Formm">
			<form
				onSubmit={e => {
					handleSubmit(e, state);
					setTimeout(function () {
						setRedirect(true);
					}, 1500);
				}}>
				<div className="form-group">
					<label htmlFor="exampleInputNombre"></label>
					<input
						name="nombre"
						placeholder="Nombre"
						type="text"
						className="form-control"
						id="exampleInputNombre"
						onChange={e => handleOnChange(e)}
					/>
					<label htmlFor="exampleInputApellido"></label>
					<input
						name="apellido"
						placeholder="Apellido"
						type="text"
						className="form-control"
						id="exampleInputApellido"
						onChange={e => handleOnChange(e)}
					/>
					<label htmlFor="exampleInputEmail1"></label>
					<input
						name="email"
						placeholder="E-mail"
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={e => handleOnChange(e)}
					/>
					<small id="emailHelp" className="form-text text-muted">
						No compartiremos tus datos con nadie.
					</small>
					<label htmlFor="exampleInputPassword"></label>
					<input
						name="password"
						placeholder="Contraseña"
						type="password"
						className="form-control"
						id="exampleInputPassword"
						onChange={e => handleOnChange(e)}
					/>
					{state.password?.length < 6 || !state.password ? (
						<small id="emailHelp" className="form-text text-muted">
							La contraseña debe contener al menos 6 caracteres
						</small>
					) : (
							''
						)}
					<label htmlFor="exampleInputPassword2"></label>
					<input
						className={state.password2 != state.password && 'danger'}
						name="password2"
						placeholder="Confirme la contraseña"
						type="password"
						className="form-control"
						id="exampleInputPassword2"
						onChange={e => handleOnChange(e)}
					/>
					{state.password2 != state.password || state.password2 == null ? (
						<small id="emailHelp" className="form-text text-muted">
							Las contraseñas deben ser las mismas
						</small>
					) : (
							<small id="emailHelp" className="form-text text-muted">
								Contraseña confirmada
							</small>
						)}
				</div>

				{!state.nombre ||
					!state.apellido ||
					!state.email ||
					!state.password ||
					!state.password2 ||
					state.password2 != state.password ||
					state.password.length < 6
					? (control = true)
					: false}
					<Button  disabled={control ? true : false}
					 variant="contained" 
					 className='skere'
					 type='submit'
					 value="Submit"
					 onClick={handleClick}>
						Registrarse
					</Button>
				{error ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="error">
						Email ya existente!
					</Alert>
				</Snackbar>
					:
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						<Alert onClose={handleClose} severity="success">
							Usuario creado!
					</Alert>
					</Snackbar>
				}
			</form>
		</div>
	);
}

export default connect(null, { addToCart })(FormUsuario);
