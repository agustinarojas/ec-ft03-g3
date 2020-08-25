import React from 'react';
import './producto.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
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
export default function Products(producto) {
	const handleOnCLick = (id, userId) => {
		axios.post(`http://localhost:3005/users/${userId}/cart`, {id});
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
				<h6>(reviews)</h6>
				<div className="Precio">
					<h3>$ {producto?.producto[0]?.precio}</h3>
					<button
						type="button"
						className="btn btn-sm btn-primary float-right"
						variant="contained" color="primary"
						onClick={e => {handleClick(); handleOnCLick(e.target.name, 1)}}
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