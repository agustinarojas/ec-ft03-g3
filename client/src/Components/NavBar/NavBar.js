import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar({search, category}) {
	return (
		// <nav class="nav navbar navbar-expand-lg navbar-light ">
		// 	<a class="navbar-brand" href="/">
		// 		Navbar
		// 	</a>
		// 	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		// 		<ul class="navbar-nav mr-auto">
		// 			<li class="nav-item active">
		// 				<Link to="/">
		// 					<span class="nav-link">Home</span>
		// 				</Link>
		// 			</li>
		// 			<li class="nav-item">
		// 				<Link to="/form">
		// 					<span class="nav-link"> Form </span>
		// 				</Link>
		// 			</li>
		// 			<li class="nav-item">
		// 			 <select>
		// 			  {category?.map(c => <Link><span>{c.titulo}</span>)}
		// 		   </select>
		// 			</li>
		// 		</ul>
		// 		<SearchBar search={search} />
		// 	</div>
		// </nav>

		<div class="navbar">
		<Link to="/">
		  <a href="#home">Home</a>
		</Link>
		<Link to="/form">
		  <a href="#form">Form</a>
		</Link>
		  <div class="dropdown">
		    <button class="dropbtn">Categorias
		      <i class="fa fa-caret-down"></i>
		    </button>
		    <div class="dropdown-content">
		     {category?.map(c => <a href="#">{c.titulo}</a>)}
		    </div>
		  </div>
		</div>

	);
}
