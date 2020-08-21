import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterByCategory} from '../../Actions/index';

function NavBar({search, category, filterByCategory}) {
	return (
		<nav className="navigatorbar">
			<Link to="/" id='chico'> <img className='logopp' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRur8gLuus9J0WluNX13m0OfezctZm3xcw2zw&usqp=CAU'/></Link>
			<Link to="/admin">Form</Link>
			<Link to="/cart">Carrito</Link>
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

export default connect(null, {filterByCategory})(NavBar);
