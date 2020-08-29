import React, {useState} from 'react';
import axios from 'axios';
import './Form.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

export function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
	root: {
	width: "100%",
	"& > * + *": {
		marginTop: theme.spacing(2),
	},
	},
}));

export default function FormUsuario() {
  const [state, setState] = useState({});
	const handleOnChange = (e) => {
		setState({
		 ...state,
		 [e.target.name]: e.target.value
	  })
	}

	const handleSubmit = (event, state) => {
		event.preventDefault();
		axios
			.post('http://localhost:3005/users', state)
			.then(res => console.log(res))
			.catch(error => console.log(error));
	};
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(true);
		};
		const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
		};

  var control;
	return (
		<div className="Formm">
			<form onSubmit={e => handleSubmit(e, state)}>
				<div className="form-group">
			  	<label htmlFor="exampleInputNombre">Nombre</label>
					<input
					  name='nombre'
						placeholder='nombre'
						type="text"
						className="form-control"
						id="exampleInputNombre"
						onChange={e => handleOnChange(e)}
					/>
					<label htmlFor="exampleInputApellido">Apellido</label>
					<input
					  name='apellido'
						placeholder='apellido'
						type="text"
						className="form-control"
						id="exampleInputApellido"
						onChange={e => handleOnChange(e)}
					/>
					<label htmlFor="exampleInputEmail1">Email</label>
					<input
					  name='email'
						placeholder='email'
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={e => handleOnChange(e)}
					/>
					<small id="emailHelp" className="form-text text-muted">
						No compartiremos tus datos con nadie.
					</small>
					<label htmlFor="exampleInputPassword">Contraseña</label>
					<input
					  name='password'
						placeholder='Contraseña'
						type="password"
						className="form-control"
						id="exampleInputPassword"
						onChange={e => handleOnChange(e)}
					/>
					{ state.password?.length < 6 || !state.password ?
					<small id="emailHelp" className="form-text text-muted">
						La contraseña debe contener almenos 6 caracteres
					</small> : ''
			   	}
					<label htmlFor="exampleInputPassword">Confirme su contraseña</label>
					<input className={state.password2 != state.password && 'danger'}
					  name='password2'
						placeholder='Contraseña'
						type="password"
						className="form-control"
						id="exampleInputPassword"
						onChange={e => handleOnChange(e)}
					/>
					{
						state.password2 != state.password || state.password2 == null ?
					 <small id="emailHelp" className="form-text text-muted">Las contraseñas deben ser las mismas</small> :
					 <small id="emailHelp" className="form-text text-muted">Contraseña confirmada</small>
				 }
				</div>
				{
					!state.nombre ||
					!state.apellido ||
					!state.email ||
					!state.password ||
					!state.password2 ||
					state.password2 != state.password ||
					state.password.length < 6
					? control = true : false
				}
				<button onClick = {handleClick} variant="contained" color="primary" type="submit"  value="Submit" disabled={control ? true : false}>
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
