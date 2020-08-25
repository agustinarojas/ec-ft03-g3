import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../../Actions/index";
import { connect } from "react-redux";
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

function ProductCard({ imagen, titulo, precio, review, id, stock, addToCart }) {
  // const handleOnCLick = (id, userId) => {
  // 	axios.post(`http://localhost:3005/users/${userId}/cart`, {id: parseInt(id)});
  // };
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
        	<div className={classes.root}>
            <Button
				className="btn btn-sm btn-primary float-right"
				variant="contained" color="primary"
            	onClick={(e) => {
                handleClick();
                addToCart(1, e.target.name);
            	}}
            	name={id}
            	disabled={stock === 0 ? true : false}
            >
            	{stock === 0 ? "Sin Stock" : "Comprar"}
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            	<Alert onClose={handleClose} severity="success">
                Agregado al carrito!
            	</Alert>
            </Snackbar>
        	</div>
        	<div className="price-wrap h5">
            <span className="price-new">${precio}</span>
        	</div>
        </div>
    	</figure>
    </div>
	);
}

export default connect(null, { addToCart })(ProductCard);
