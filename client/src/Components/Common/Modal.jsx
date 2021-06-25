import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({
   text, dialogTitle, handleClose, open, user, id, functionAceptar, functionAceptar2, classes
}) {
   return (
      <Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description">
			<DialogTitle id="alert-dialog-slide-title">{dialogTitle}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					{text}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<button id="boton2" onClick={handleClose} className={classes ? classes.cancelar : ''} >
					Cancelar
				</button>
				<button
					id="boton1"
					variant="outlined"
					className={classes ? classes.aceptar : ''}
					name={id}
					onClick={e => {
						functionAceptar(user.id, e.target.name);
						handleClose();
						functionAceptar2();
					}}>
					Aceptar
				</button>
			</DialogActions>
		</Dialog>
   );
}