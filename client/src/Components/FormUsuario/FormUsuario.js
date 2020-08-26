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
	const [email, setEmail] = useState({email: ''});

	const handleSubmit = (event, email) => {
		event.preventDefault();
		axios
			.post('http://localhost:3005/users', email)
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

	return (
		<div className="Formm">
			<form onSubmit={e => handleSubmit(e, email)}>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={e => setEmail({email: e.target.value})}
					/>
					<small id="emailHelp" className="form-text text-muted">
						No compartiremos tu e-mail con nadie.
					</small>
				</div>
				<button onClick = {handleClick} variant="contained" color="primary" type="submit"  value="Submit">
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
