import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 53ae8bcb1580f6362fe017ca2eab78409a46db39
import {addToCart} from '../../Actions/index';
import {connect} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

<<<<<<< HEAD

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
=======
function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles(theme => ({
>>>>>>> 53ae8bcb1580f6362fe017ca2eab78409a46db39
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));
function ProductCard({imagen, titulo, precio, review, id, stock, addToCart}) {
<<<<<<< HEAD
    // const handleOnCLick = (id, userId) => {
    //     axios.post(´http://localhost:3005/users/${userId}/cart´, {id: parseInt(id)});
=======
	// const handleOnCLick = (id, userId) => {
	//     axios.post(´http://localhost:3005/users/${userId}/cart´, {id: parseInt(id)});
>>>>>>> 53ae8bcb1580f6362fe017ca2eab78409a46db39
	// };
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(true);
<<<<<<< HEAD
		};
		const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
		};

    return (
        <div>
            <figure className="card card-product contein">
                <Link to={`/product/${id}`}>
                    <div className="img-wrap">
                        <img src={imagen} className="imagen" />
                    </div>
                </Link>
                <figcaption className="info-wrap">
                    <h4 className="title">{titulo}</h4>
                    <div className="rating-wrap">
                        <div className="label-rating"> (Review) </div>
                    </div>
                </figcaption>
                <div className="bottom-wrap">
                    <button
                        className="btn btn-sm btn-primary float-right"
                        onClick={e =>{handleClick(); addToCart(1, e.target.name)}}
                        name={id}
                        disabled={stock === 0 ? true : false}>
                        {stock === 0 ? 'Sin Stock' : 'Comprar'}
                    </button>
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            	<Alert onClose={handleClose} severity="success">
                Agregado al carrito!
            	</Alert>
            </Snackbar>
                    <div className="price-wrap h5">
                        <span className="price-new">${precio}</span>
                    </div>
                </div>
            </figure>
        </div>
    );
}

export default connect(null, {addToCart})(ProductCard);
=======
	};
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<div>
			<figure className="card card-product contein">
				<Link to={`/product/${id}`}>
					<div className="img-wrap">
						<img src={imagen} className="imagen" />
					</div>
				</Link>
				<figcaption className="info-wrap">
					<h4 className="title">{titulo}</h4>
					<div className="rating-wrap">
						<div className="label-rating"> (Review) </div>
					</div>
				</figcaption>
				<div className="bottom-wrap">
					<button
						className="btn btn-sm btn-primary float-right"
						onClick={e => {
							handleClick();
							addToCart(1, e.target.name);
						}}
						name={id}
						disabled={stock === 0 ? true : false}>
						{stock === 0 ? 'Sin Stock' : 'Comprar'}
					</button>
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						<Alert onClose={handleClose} severity="success">
							Agregado al carrito!
						</Alert>
					</Snackbar>
					<div className="price-wrap h5">
						<span className="price-new">${precio}</span>
					</div>
				</div>
			</figure>
		</div>
	);
}

export default connect(null, {addToCart})(ProductCard);
>>>>>>> 53ae8bcb1580f6362fe017ca2eab78409a46db39
