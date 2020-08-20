import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterByCategory} from '../../Actions/index';

function NavBar({search, category, filterByCategory}) {
	return (
		<nav className="navigatorbar">
			<Link to="/">Home</Link>
			<Link to="/form">Form</Link>
			<Link to="/cart">Carrito</Link>
			<Link to="/log_in"> Log In </Link>
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

export default connect(null, {filterByCategory})(NavBar);
