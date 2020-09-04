import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {getOrders, getUsers} from '../../Actions/index';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

function SimpleList({getOrders, getUsers}) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<Link to="/settings/products" style={{textDecoration: 'none', color: 'black'}}>
					<ListItem button>
						<ListItemIcon>
							<span className="material-icons">extension_icon</span>
						</ListItemIcon>
						<ListItemText primary="Productos" />
					</ListItem>
				</Link>
				<Link to="/settings/categories" style={{textDecoration: 'none', color: 'black'}}>
					<ListItem button>
						<ListItemIcon>
							<span className="material-icons">sports_football_icon</span>
						</ListItemIcon>
						<ListItemText primary="Categorías" />
					</ListItem>
				</Link>
				<Link
					to="/settings/orders"
					style={{textDecoration: 'none', color: 'black'}}
					onClick={() => getOrders()}>
					<ListItem button>
						<ListItemIcon>
							<span className="material-icons">receipt_icon</span>
						</ListItemIcon>
						<ListItemText primary="Ordenes" />
					</ListItem>
				</Link>
				<Link
					to="/settings/users_table"
					style={{textDecoration: 'none', color: 'black'}}
					onClick={getUsers}>
					<ListItem button>
						<ListItemIcon>
							<span className="material-icons">people_icon</span>
						</ListItemIcon>
						<ListItemText primary="Usuarios" />
					</ListItem>
				</Link>
			</List>
		</div>
	);
}
export default connect(null, {getUsers, getOrders})(SimpleList);
