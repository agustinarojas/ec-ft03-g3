import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterByCategory, getCarrito} from '../../Actions/index';

function NavBar({search, category, filterByCategory, getCarrito}) {
	return (
		<nav className="navigatorbar">
			<Link to="/">Home</Link>
			<Link to="/admin">Form</Link>
			<Link to="/cart" onClick={() => getCarrito(1)}>Carrito</Link>
			<Link to="/sign_up"> Sign Up </Link>
			<div className="dropd">
				<button className="dropdbtn">
					Categorias
					<i className="fa fa-caret-down"></i>
				</button>
				<div className="dropd-cont">
					{category?.map((c, i) => (
						<Link to={c.titulo} onClick={e => filterByCategory(c.titulo)} key={i}>
							{c.titulo}
						</Link>
					))}
				</div>
			</div>
			<SearchBar search={search} />
		</nav>
	);
}

export default connect(null, {filterByCategory, getCarrito})(NavBar);
