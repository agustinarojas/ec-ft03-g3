import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Icons({handleProfileMenuOpen, menuId, user, productsCar }){

   return (
      <div>
         { user.id && <IconButton
				edge="end"
				aria-label="account of current user"
				aria-controls={menuId}
				aria-haspopup="true"
				onClick={handleProfileMenuOpen}
				color="inherit"
			>
				<AccountCircle />
			</IconButton>}

         { !user.id && 
            <Link to="/login" style={{textDecoration:'none', marginRight: '10px'}} > 
               <Button variant="outlined" style={{color: '#FFF' }}>INGRESAR</Button>
            </Link>
         }
         { !user.id &&
         <Link to="/sign_up" style={{textDecoration:'none'}}> 
            <Button variant="outlined" style={{color: '#FFF' }}>REGISTRARSE</Button>
         </Link>
         }
         { user.admin && 
         <Link to="/settings" style={{textDecoration:'none', marginRight: '10px'}} > 
            <Tooltip title="Administrar" > 
               <IconButton color="inherit">
                  <SettingsIcon style={{color: '#FFF' }}/>
               </IconButton>
            </Tooltip> 
         </Link>
         }
         <Link to={`/cart/${user.id}`} style={{textDecoration:'none', marginRight: '10px'}} > 
            <IconButton aria-label="cart">
               <Badge badgeContent={productsCar.length} color="secondary">
                  <ShoppingCartIcon style={{color: '#FFF' }} />
               </Badge>
            </IconButton>
         </Link>
      </div>
   )
}