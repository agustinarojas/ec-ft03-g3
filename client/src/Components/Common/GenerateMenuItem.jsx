import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';


export default function GenerateMenuItem({item, handleSwitch, switcher, classes}){
   
   return (
      <div onClick={item.function} className={switcher === item.text ? classes.selected : '' }>
         <MenuItem onClick={() => handleSwitch(item.text)} className={classes.menuItem} >
				<IconButton className={ switcher === item.text ? classes.menuIcon : '' } > 
					{item.icon}
				</IconButton>
				<p style={{marginTop: '16px'}} > {item.text} </p> 
			</MenuItem> 
      </div>
   )
}