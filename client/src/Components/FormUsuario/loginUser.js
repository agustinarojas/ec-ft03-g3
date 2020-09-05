import React, {useState} from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {login} from '../../Actions/index';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

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

function LoginUser({login, user}) {
	const [state, setState] = useState({});
	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState(false);
	const [inputEmail, setInputEmail] = useState({});
	const [abrir, setAbrir] = useState(false);


	const handleOnChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
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

	const handleOnSubmit = event => {
		event.preventDefault();
		login(state);
	};

	const handleClickAbrir = () => {
	setAbrir(true);
};

const handleCerrar = () => {
	setAbrir(false);
};

const handleSendEmail = () => {
	axios
	.post('http://localhost:3005/sendemail/forgottenPassword', {email: inputEmail})
	.then(res => {
		 console.log(res)
		 localStorage.setItem('email', JSON.stringyfy(inputEmail))
	})

	.catch(err => console.log(err));
};

	function validator(user) {
		console.log(user + '  USERrrrrrrrrrrrrrrrrrrr');
		if (!user) {
			alert('Estas logeado.');
			setError(true);
			setTimeout(function () {
				//	setRedirect(true);
			}, 1000);
		} else {
			alert('No estas logeado');
			setError(false);
		}
	}
	if (redirect) {
		return <Redirect to="/" />;
	}

	return (
		<div style ={{marginTop: '2%'}} className="Formm">
			<form onSubmit={e => handleOnSubmit(e)}>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1"></label>
					<TextField
					style={{width:'60%', marginTop: '1%'}}
						name="email"
						label="E-mail"
						type="email"
						id="standard-basic"
						aria-describedby="emailHelp"
						onChange={e => handleOnChange(e)}
					/>
					<label htmlFor="exampleInputPassword"></label>
					<TextField
					style={{width:'60%', marginTop: '1%'}}
						name="password"
						label="Contraseña"
						type="password"
						id="standard-basic"
						onChange={e => handleOnChange(e)}
					/>
					<small id="emailHelp" className="form-text text-muted">
						No compartiremos tus datos con nadie.
					</small>
				</div>
				<Link style={{display: 'block', marginBottom: '20px'}} onClick={handleClickAbrir}>
					<span>¿Olvidaste tu contraseña?</span>
				</Link>
				<div>
      <Dialog open={abrir} onClose={handleCerrar} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">¿Olvidaste tu contraseña?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingresa el email con el que te registraste y te enviaremos un email con los pasos a seguir.
          </DialogContentText>
          <TextField onChange={e => setInputEmail(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="E-mail"
            type="email"
						name="userEmail"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCerrar} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => {handleCerrar(); handleSendEmail()}} color="primary">
            Recibir e-mail
          </Button>
        </DialogActions>
      </Dialog>
    </div>
				<Button
					onClick={() => {
						handleClick();
						validator(user);
					}}
					variant="contained"
					color="primary"
					type="submit"
					value="Submit">
					Ingresar
				</Button>
				<Link to = "/sign_up">¿No tenes una cuenta? Registrate </Link>

				{/* {error ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success">
						Sesion iniciada con exito!
					</Alert>
				</Snackbar>
				:
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="error">
						Usuario o Contraseña incorrecta
					</Alert>
				</Snackbar>} */}
			</form>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps, {login})(LoginUser);
