import React from 'react';
import Button from '@material-ui/core/Button';

export default function IconButton({icon, classes, bkColor, color, text}) {

   return (
      <div>
         <Button
         style={{backgroundColor: bkColor, color: color}}
         variant="contained"
         className={classes.button}
         startIcon={icon}
         >
         {text}
         </Button>
      </div>
   );
}
