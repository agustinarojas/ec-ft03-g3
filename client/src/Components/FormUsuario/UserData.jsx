import React, { useEffect, useState } from 'react';
import MailIcon from '@material-ui/icons/Mail';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PublicIcon from '@material-ui/icons/Public';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import UserProfileInput from './UserProfileInput';
import { useStylesSettings } from '../Settings/UseStyles';

export default function UserData({user}) {
   const [initials, setInitials] = useState('')
   const classes = useStylesSettings();
   const inputs = [{ icon: <MailIcon className={classes.icons} />, title: 'Email', data: user.email },
                  {icon: <PublicIcon className={classes.icons}/>, title: 'Provincia', data: user.provincia || 'Provincia no guardada' },
                  {icon: <LocationCityIcon className={classes.icons} />, title: 'Ciudad', data: user.ciudad || 'Ciudad no guardada' },
                  {icon: <MarkunreadMailboxIcon className={classes.icons}/>, title: 'CP', data: user.cp || 'Código postal no guardado' }]

   useEffect(() => {
      user.nombre && setInitials(user.nombre[0] + user.apellido[0])
      
   }, [user])

   return (
      <Paper className={classes.box} >
         {user.admin ? <Typography variant='h4'>ADMINISTRADOR </Typography> : <Typography>USUARIO</Typography>}
         <Avatar className={classes.avatar}> { initials } </Avatar>
			<Typography variant='h4' >
				{user.nombre} {user.apellido}
			</Typography>

         { user.nombre && inputs.map((input) => (
               <UserProfileInput item={input} classes={classes} />
            )) 
         }
      </Paper>
   );
}
