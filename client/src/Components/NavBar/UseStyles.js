import { fade, makeStyles } from '@material-ui/core/styles';
import { colors } from '../Common/Colors';

export const useStyles = makeStyles((theme) => ({
   grow: {
      flexGrow: 1,
      },
      navBar: {
         backgroundColor: colors.primary,
      },
      menuButton: {
         marginRight: theme.spacing(2),
         color: colors.icons,
         width: 35,
         height: 35,
      },
      title: {
         display: 'none',
         [theme.breakpoints.up('sm')]: {
            display: 'block',
         },
      },
      search: {
         position: 'relative',
         borderRadius: theme.shape.borderRadius,
         backgroundColor: fade(theme.palette.common.white, 0.15),
         '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
         },
         marginRight: theme.spacing(2),
         marginLeft: 0,
         width: '100%',
         [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            width: 'auto',
         },
      },
      searchIcon: {
         padding: theme.spacing(0, 2),
         borderRadius: theme.shape.borderRadius,
         backgroundColor: fade(theme.palette.common.white, 0.15),
         height: '100%',
         position: 'absolute',
         pointerEvents: 'auto',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         cursor: 'pointer',
         width: '42px',
         zIndex: '99',
         color: colors.icons,
      },
      inputRoot: {
         color: 'inherit',
      },
      inputInput: {
         padding: theme.spacing(1, 1, 1, 0),
         color: colors.icons,
         // vertical padding + font size from searchIcon
         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
         transition: theme.transitions.create('width'),
         width: '100%',
         [theme.breakpoints.up('md')]: {
            width: '20ch',
         },
      },
      sectionDesktop: {
         display: 'none',
         [theme.breakpoints.up('md')]: {
            display: 'flex',
         },
      },
      sectionMobile: {
         display: 'flex',
         [theme.breakpoints.up('md')]: {
            display: 'none',
         },
      },
      root: {
         height: 10,
      },
      wrapper: {
         width: 200 + theme.spacing(3),
      },
      paper: {
         zIndex: 1,
         position: 'relative',
      },
      categoriesTittle: {
         margin: theme.spacing(0, 2, 0),
         paddingTop: '15px',
      },
      items:{
         paddingLeft: '40px'
      },
      link: {
         textDecoration: 'none',
         color: 'black',
         '&&:hover': {
            textDecoration: 'none',
            color: 'black',
         }
      },
   }));
