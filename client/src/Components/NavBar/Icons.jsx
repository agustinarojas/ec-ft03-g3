import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './UseStyles';

export default function Icons({handleProfileMenuOpen, menuId, user, productsCar }){
   const classes = useStyles();

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
				<AccountCircle className={classes.menuButton + ' ' + classes.size} />
			</IconButton>}

         { !user.id && 
            <Link to="/login" style={{textDecoration:'none'}} > 
               <Button variant="outlined" className={classes.menuButton} >INGRESAR</Button>
            </Link>
         }
         { !user.id &&
         <Link to="/sign_up" style={{textDecoration:'none'}}> 
            <Button variant="outlined" className={classes.menuButton}>REGISTRARSE</Button>
         </Link>
         }
         { user.admin && 
         <Link to="/settings" style={{textDecoration:'none'}} > 
            <Tooltip title="Administrar" > 
               <IconButton color="inherit">
                  <SettingsIcon className={classes.menuButton + ' ' + classes.size}/>
               </IconButton>
            </Tooltip> 
         </Link>
         }
         <Link to={`/cart/${user.id}`} style={{textDecoration:'none'}} > 
            <IconButton aria-label="cart">
               <Badge badgeContent={productsCar.length} color="secondary">
                  <ShoppingCartIcon className={classes.menuButton + ' ' + classes.size} />
               </Badge>
            </IconButton>
         </Link>
      </div>
   )
}