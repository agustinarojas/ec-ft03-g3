import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './User.css';
import { deleteUsers, getUser } from '../../Actions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import PersonIcon from '@material-ui/icons/Person';
import { useStylesSettings } from '../Settings/UseStyles';
import UserOrders from '../Orders/UserOrder';
import RestorePass from './RestorePass';
import GenerateMenuItem from '../Common/GenerateMenuItem';
import UserData from './UserData';
import IconButton from '../Common/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { colors } from '../Common/Colors'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function UserProfile({user, deleteUsers}) {
	const [open, setOpen] = useState(false);
	const [switcher, setSwitcher] = useState('Mis Datos')

	const classes = useStylesSettings();
	const items = [ {icon: <PersonIcon/>, text: 'Mis Datos', function: null},
						{icon: <ShopTwoIcon/>, text: 'Mis Compras', function: null},
						{icon: <VpnKeyIcon/>, text: 'Cambiar Contrseña', function: null},] 
	// 					{icon: <ReceiptIcon/>, text: 'Ordenes', function: getOrders},
	// 					{ icon: <PeopleIcon/>, text: 'Usuarios', function: getUsers}]

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSwitch = (currentTable) => {
		setSwitcher(currentTable);
	}

	return (
		<div>
			{//user.id ? (
				<div className={classes.container} >
					<Paper className={classes.options} >
						{ items.map((item, idx) => (
								<GenerateMenuItem 
									item={item} 
									classes={classes} 
									switcher={switcher} 
									handleSwitch={handleSwitch}
									key={idx} 
								/>	
							)
						)}
						<div className={classes.position} > 
							<IconButton 
								icon={<DeleteIcon />} 
								classes={classes} 
								bkColor={colors.danger}
								color={colors.icons}
								text={'Eliminar Cuenta'} 
							/>
							<IconButton 
								icon={<ExitToAppIcon/> } 
								classes={classes} 
								bkColor={colors.primary}
								color={colors.icons} 
								text={'Cerrar Sesión'} 
							/> 
						</ div>
					</Paper>
					{ switcher === 'Mis Datos' && <UserData user={user} /> }		
					{ switcher === 'Mis Compras' && <UserOrders /> }		
					{ switcher === 'Cambiar Contrseña' && <RestorePass user={getUser} /> }		

							{/* <Link to={`/users/${user.id}/orders`}>
								<button className="compra">Mis Compras</button>
							</Link>
							<Link to="/RestablecerContraseña">
								<button className="changePass">Cambiar contraseña</button>
							</Link>
							<button className="deleteAcc" onClick={handleClickOpen}>
								Eliminar Cuenta
							</button> */}

							<Dialog
								open={open}
								TransitionComponent={Transition}
								keepMounted
								onClose={handleClose}
								aria-labelledby="alert-dialog-slide-title"
								aria-describedby="alert-dialog-slide-description">
								<DialogTitle id="alert-dialog-slide-title">{'Eliminar cuenta'}</DialogTitle>
								<DialogContent>
									<DialogContentText id="alert-dialog-slide-description">
										¿Estas seguro que quieres eliminar tu cuenta?
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleClose} color="primary">
										Cancelar
									</Button>
									<Button
										onClick={() => {
											deleteUsers(user.id);
											handleClose();
										}}
										color="primary">
										Aceptar
									</Button>
								</DialogActions>
							</Dialog>
				</div>
			// ) : (
			// 	<Redirect to="/sign_up" />
			// )
		}
		</div>
	);
}
function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps, { deleteUsers, getUser })(UserProfile);
