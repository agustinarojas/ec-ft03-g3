import React, {useState} from 'react';
import './Item.css';
import {connect} from 'react-redux';
import {deleteProdCart, setCantidad} from '../../Actions/index';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { colors } from '../Common/Colors';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '../Common/IconButton';
import Modal from '../Common/Modal';


const useStyles = makeStyles((theme) => ({
	root: {
	width: '100%',
	backgroundColor: theme.palette.background.paper,
	},
	item: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	img:{
		width: '8vw',
		height: '15vh',
		borderRadius: '10px',
	},
	titulo: {
		fontWeight: 500,
		fontSize: 20,
	},
	small: {
		position: 'relative', 
		top: '13%', 
		right: '8.15%', 
		opacity: '0.6'
	},
}));

function Item({
	titulo,
	descripcion,
	imagen,
	precio,
	id,
	deleteProdCart,
	stock,
	cantidad,
	setCantidad,
	user,
	cantidadLocalStorage,
}) {
	const classes = useStyles();
	const [cantidades, setCantidades] = useState(cantidad);
	const handleOnCLickCantidad = (prodId, type) => {
		if (type === 'menos' && cantidades > 1) {
			setCantidades(cantidades - 1);
			setCantidad(user.id, prodId, cantidades - 1);
			cantidadLocalStorage();
		} else if (type === 'mas' && stock > cantidades) {
			setCantidades(cantidades + 1);
			setCantidad(user.id, prodId, cantidades + 1);
			cantidadLocalStorage();
		}
	};
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
	<List component="nav" className={classes.root} aria-label="mailbox folders">
		<ListItem className={classes.item} >
			<img className={classes.img} src={imagen} />
			<div className="">
				<p className={classes.titulo}>{titulo}</p>
				<p>{descripcion}</p>
			</div>
			<div className="botooon">
				<button
					className="btn botoncart"
					onClick={e => {
					handleOnCLickCantidad(e.target.name, 'menos');
					}}
					name={id}>
					-
				</button>
				<p className="acomodo">{cantidades}</p>
				<button
					className="btn botoncart"
					onClick={e => {
						handleOnCLickCantidad(e.target.name, 'mas');
					}}
					name={id}>
						+
				</button>
			</div>
			<small sclassName={classes.small}>
				{stock} {stock > 1 ? 'disponibles' : 'disponible'}
			</small>
			<div className="precioboton">
				<p id="precio">$ {precio} </p>
			</div > 
			<IconButton 
				icon={<DeleteIcon />} 
				bkColor={colors.danger} 
				color={colors.icons} 
				onClick={handleClickOpen}
			/>
		</ListItem>
		<Divider light />
		<Modal 
			text='¿Estas seguro que deseas eliminar el producto?' 
			dialogTitle='Eliminar Producto' 
			handleClose={handleClose}
			open={open}
			user={user}
			id={id}
			functionAceptar={deleteProdCart}
			functionAceptar2={cantidadLocalStorage}
		/>
	</List>
		// <div className="carritoItem">
		// 	<ul className="list-group list-group-flush cartitem">
		// 		<li className="list-group-item disp itemind">
		// 			<img className="imgCart" src={imagen} />
		// 			<div className="titdes">
		// 				<p className="tituloo">{titulo}</p>
		// 				<p>{descripcion}</p>
		// 			</div>
		// 			<div className="botooon">
		// 				<button
		// 					className="btn botoncart"
		// 					onClick={e => {
		// 						handleOnCLickCantidad(e.target.name, 'menos');
		// 					}}
		// 					name={id}>
		// 					-
		// 				</button>
		// 				<p className="acomodo">{cantidades}</p>
		// 				<button
		// 					className="btn botoncart"
		// 					onClick={e => {
		// 						handleOnCLickCantidad(e.target.name, 'mas');
		// 					}}
		// 					name={id}>
		// 					+
		// 				</button>
		// 			</div>
		// 			<small style={{position: 'relative', top: '13%', right: '8.15%', opacity: '0.6'}}>
		// 				stock ({stock})
		// 			</small>
		// 			<div className="precioboton">
		// 				<p id="precio">$ {precio} </p>
		// 				<button
		// 					id="boton1"
		// 					variant="outlined"
		// 					color="primary"
		// 					onClick={() => handleClickOpen()}>
		// 					X
		// 				</button>
		// 				
		// 			</div>
		// 		</li>
		// 	</ul>
		// </div>
	);
}
function mapStateToProps(state) {
	return {
		user: state.user,
	};
}
export default connect(mapStateToProps, {deleteProdCart, setCantidad})(Item);
