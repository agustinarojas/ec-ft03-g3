import React, {useState, useRef} from 'react';
import {Redirect} from 'react-router-dom';
import {getOrders, getUsers} from '../../Actions/index';
import {connect} from 'react-redux';
import './setting.css';
import { useStylesSettings } from './UseStyles'
import Paper from '@material-ui/core/Paper';
import CategoryIcon from '@material-ui/icons/Category';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ExtensionIcon from '@material-ui/icons/Extension';
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import UserTable from '../Table/UserTable';
import CategoryTable from '../Table/CategoryTable';
import ProductTable from '../Table/ProductTable';
import Orders from '../Orders/Orders';

function SimpleList({getOrders, getUsers, user}) {
	const [switcher, setSwitcher] = useState('Productos');
	const classes = useStylesSettings();
	const items = [ {icon: <ExtensionIcon/>, text: 'Productos', function: null}, 
						{icon: <CategoryIcon/>, text: 'Categorías', function: null}, 
						{icon: <ReceiptIcon/>, text: 'Ordenes', function: getOrders},
						{ icon: <PeopleIcon/>, text: 'Usuarios', function: getUsers}]

	const handleSwitch = (currentTable) => {
		setSwitcher(currentTable);
	}

	const generate = () => {		
		return items.map((item, idx) => 
			React.cloneElement(
				<div></div>,
				{ key: idx, onClick: item.function },
				<MenuItem 
				onClick={() => handleSwitch(item.text)} 
				className={switcher === item.text ? classes.selected : ''} 
				>
					<IconButton> 
						{item.icon}
					</IconButton>
					<p style={{marginTop: '16px'}} > {item.text} </p> 
				</MenuItem> 
			)
		)
	}

	return (
		<div>
			{user.admin? (
			<div className={classes.container} >  
				<Paper className={ classes.background} >
					{ generate() }
				</Paper>
				{switcher === 'Productos' && <ProductTable clase={classes.tables} />}
				{switcher === 'Categorías' && <CategoryTable clase={classes.tables} />}
				{switcher === 'Ordenes' && <Orders clase={classes.tables} />}
				{switcher === 'Usuarios' && <UserTable clase={classes.tables} />}
			</div>
			):(
				<Redirect to= "/"/>
			)}
		</div>
	);
}
const mapStateToProps = state => {
	return {
		user: state.user,
	};
};
export default connect(mapStateToProps ,{getUsers,getOrders})(SimpleList);
