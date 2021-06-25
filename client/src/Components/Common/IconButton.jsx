import React from 'react';
import Button from '@material-ui/core/Button';

export default function IconButton({icon, classes, bkColor, color, text, onClick}) {

   return (
      <div>
         <Button
         style={{backgroundColor: bkColor, color: color}}
         variant="contained"
         className={classes ? classes.button : ''}
         startIcon={icon}
         onClick={onClick}
         >
         {text}
         </Button>
      </div>
   );
}
