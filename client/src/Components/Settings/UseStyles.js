import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../Common/Colors';

export const useStylesSettings = makeStyles((theme) => ({
   grow: {
      flexGrow: 1,
      },
      settingsIcon: {
         width: '30px',
      },
      options: {
         width: '22%',
         height: '100%',
         marginTop: '-9px',
      },
      container: {
         display: 'flex',
         height: '92vh',
      },
      tables: {
         width: '100%',
         marginTop: '-9px',
      } ,
      selected: {
         backgroundColor: colors.secondary,
         color: colors.icons,
         '&:hover': {
            backgroundColor: colors.hover,
            color: colors.icons,
         },
      },
      menuItem: {
         paddingLeft: '0px',
      },
      menuIcon: {
         color: colors.icons
      },
      margin: {
         margin: theme.spacing(2, 0, 2, 4),
         alignSelf: 'start',
         width: '95%'
      },
      box: {
         display: 'flex',
         flexDirection: 'column',
         width: '50%',
         alignItems: 'center',
         position: 'absolute',
         right: '14%',
         padding: '40px 0 40px 0',
      },
      avatar: {
         backgroundColor: colors.secondary,
         margin: theme.spacing(3, 0, 3, 0),
         width: 100,
         height: 100,
         fontSize: 40,
      },
      icons: {
         color: colors.secondary,
      },
      grid: {
         display: 'flex',      
      },
      profileInput: {
         width: '60%',
         margin:  theme.spacing(0, 2, 0, 2),
      },
      button: {
         margin: theme.spacing(1),
      },
      position: {
         position: 'absolute',
         bottom: '20vh',
      },
}));
