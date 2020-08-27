import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterByCategory, getCarrito, getOrder, getProducts, getOrders, getUser} from '../../Actions/index';

function NavBar({search, category, filterByCategory, getProducts, getOrders, getUser}) {
	return (
		<nav className="navigatorbar">
			<Link to="/" id="chico" onClick={() => getProducts()}>
				<img
					className="logopp"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRur8gLuus9J0WluNX13m0OfezctZm3xcw2zw&usqp=CAU"
				/>
			</Link>
			<div className="dropd">
				<button className="dropdbtn">
					Categorias
					<i className="fa fa-caret-down"></i>
				</button>
				<div className="dropd-cont">
					{category?.map((c, i) => (
						<Link to={`/category/${c.titulo}`} onClick={e => filterByCategory(c.titulo)} key={i}>
							{c.titulo}
						</Link>
					))}
				</div>
			</div>
			<Link to="/sign_up"> Registrarse </Link>
			<Link to="/login"> Iniciar Sesion </Link>
			<Link to="/admin">Admin</Link>

			<Link to="/orders" onClick={() => getOrders()}>
				Ordenes
			</Link>
			<Link to="/cart/1">
				<span class="material-icons"> shopping_cart </span>
			</Link>
			<Link to="/me" onClick={() => getUser()} >
				Me
			</Link>
			<SearchBar search={search} />
		</nav>
	);
}

export default connect(null, {filterByCategory, getOrder, getProducts, getOrders, getUser})(NavBar);
