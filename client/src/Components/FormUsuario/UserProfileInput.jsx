import React from 'react'
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { Tooltip } from '@material-ui/core';

export default function UserProfileInput({item, classes}) {
   return (
      <div className={classes.margin}>
         <Tooltip title={item.title} >
            <Grid className={classes.grid} spacing={1} >
               <Grid item>
                  {item.icon}
               </Grid>
                  <Input
                     className={classes.profileInput}
                     id="input-with-icon-adornment"
                     defaultValue={item.data}
                     readOnly={true}
                     />
            </Grid>
         </Tooltip>
      </div>
   )
} 