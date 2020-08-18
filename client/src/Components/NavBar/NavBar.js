import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar({search}) {
	return (
		<nav class="nav navbar navbar-expand-lg navbar-light ">
			<a class="navbar-brand" href="/">
				Navbar
			</a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<Link to="/">
							<span class="nav-link">Home</span>
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/form">
							<span class="nav-link"> Form </span>
						</Link>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Categorias
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#">
								una cosa
							</a>
							<a class="dropdown-item" href="#">
								Another action
							</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
							Disabled
						</a>
					</li>
				</ul>
				<SearchBar search={search} />
			</div>
		</nav>
	);
}
