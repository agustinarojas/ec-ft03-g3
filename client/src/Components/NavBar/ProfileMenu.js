import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

export default function ProfileMenu({anchorEl, menuId, isMenuOpen, handleMenuClose, user,logout}) {
   return (
      <Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
         <Link to="/me" style={{textDecoration: 'none', color: 'black' }}> 
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
         </Link>
			<Link  to={`/users/${user.id}/orders`} style={{textDecoration: 'none', color: 'black'}}>
				<MenuItem onClick={handleMenuClose}>Mis compras</MenuItem>
			</Link>
			<MenuItem 
				onClick={() => {
					handleMenuClose();
					logout();
			}}>Cerrar sesión</MenuItem>
		</Menu>
   )
}