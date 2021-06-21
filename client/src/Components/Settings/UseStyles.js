import { fade, makeStyles } from '@material-ui/core/styles';
import { colors } from '../Common/Colors';

export const useStylesSettings = makeStyles((theme) => ({
   grow: {
      flexGrow: 1,
      },
      settingsIcon: {
         width: '30px',
      },
      background: {
         width: '22%',
         marginTop: '-9px',
      },
      container: {
         display: 'flex',
      },
      tables: {
         width: '100%',
         marginTop: '-9px',
      } ,
      selected: {
         backgroundColor: colors.secondary,
         '&:hover': {
            backgroundColor: colors.hover,
         },
      }, 
}));
