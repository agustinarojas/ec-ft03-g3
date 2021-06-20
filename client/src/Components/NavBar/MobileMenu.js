import React from 'react';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Link } from 'react-router-dom';

export default function MobileMenu(
	{mobileMenuId, isMobileMenuOpen, mobileMoreAnchorEl, handleMobileMenuClose, handleProfileMenuOpen, user, productsCar}
	) {
	return (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			{ !user.id &&
			<Link to="/login" style={{textDecoration: 'none', color: '#0d75e5' }} > 
				<MenuItem>
					<IconButton color="inherit">
						<AddBoxIcon/>  
					</IconButton>
					<p style={{marginTop: "16px"}} >Ingresar</p>
				</MenuItem>
			</Link>
			}
			{ !user.id &&
			<Link to="/sign_up" style={{textDecoration: 'none', color: '#34b734' }} > 
				<MenuItem className='registerLink' >
					<IconButton color="inherit">
						<ExitToAppIcon/>  
					</IconButton>
					<p style={{marginTop: "16px"}} >Registrarse</p>
				</MenuItem>
			</Link>
			}
			{ user.admin &&
			<Link to="/settings" style={{textDecoration:'none', color: 'black'}} > 
				<MenuItem>
					<IconButton color="inherit">
						<SettingsIcon/>  
					</IconButton>
					<p style={{marginTop: "16px"}} >Administrar</p>
				</MenuItem>
			</Link>
			}
			<Link to={`/cart/${user.id}`} style={{textDecoration:'none', color: 'black'}} > 
				<MenuItem>
					<IconButton aria-label="show 11 new notifications" color="inherit">
						<Badge badgeContent={productsCar.length} color="secondary">
							<ShoppingCartIcon />
						</Badge>
					</IconButton>
					<p style={{marginTop: "16px"}}>Carrito</p>
				</MenuItem>
			</Link>
			{ user.id &&
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p style={{marginTop: "16px"}}>Profile</p>
			</MenuItem>
			}
		</Menu>
	);
}
