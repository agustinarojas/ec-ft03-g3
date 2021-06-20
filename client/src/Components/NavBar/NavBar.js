import React from 'react';
import { connect } from 'react-redux';
import { filterByCategory, getProducts, getUser, logout, getUsers, haveCart } from '../../Actions/index';
import MenuList from './MenuList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './UseStyles';
import MobileMenu from './MobileMenu';
import Icons from './Icons';
import ProfileMenu from './ProfileMenu';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

function NavBar({ search, category, filterByCategory, user, logout, productsCar,}) {
	const [checked, setChecked] = React.useState(false);
	let cats = [];

	category.map(category => {
		if (category.titulo) cats.push(category);
	});
	
	const handleCheck = () => {
		setChecked((prev) => !prev);
	};
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const [input, setInput] = React.useState('');

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
	const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);

	const handleChange = (event) => setInput(event.currentTarget.value)

	const handleClick = () => {
		search(input)
		setInput('')
	}
	const handleKeyUp = (event) =>{
		if(event.keyCode === 13){
			search(input)
			setInput('')
		}
		return 
	} 

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<ProfileMenu 
			anchorEl={anchorEl} 
			menuId={menuId} 
			isMenuOpen={isMenuOpen} 
			handleMenuClose={handleMenuClose} 
			user={user}
			logout={logout}
		/>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<MobileMenu 
			mobileMenuId={mobileMenuId} 
			isMobileMenuOpen={isMobileMenuOpen} 
			mobileMoreAnchorEl={mobileMoreAnchorEl}
			handleMobileMenuClose={handleMenuClose}
			handleProfileMenuOpen={handleProfileMenuOpen}
			user={user}
			productsCar={productsCar}
		/> 
	);

	return (
		<div> 
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<div>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
							onClick={handleCheck}
						>
							<MenuIcon />
						</IconButton>
					</div>
					<Link to="/" style={{ textDecoration: 'none', color: "white" }}> 
						<Typography className={classes.title} variant="h6" noWrap>
							Henry's Toys
						</Typography>
					</Link>
					<div className={classes.search}  >
						<div className={classes.searchIcon} onClick={handleClick} style={{zIndex: '99'}} >
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Buscar en Henry's…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search', 'value': input }}
							onChange={handleChange}
							onKeyUp={handleKeyUp}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}> 
						<Icons  
							menuId={menuId} 
							handleProfileMenuOpen={handleProfileMenuOpen}
							user={user}
							productsCar={productsCar}
						/>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
						aria-label="show more"
						aria-controls={mobileMenuId}
						aria-haspopup="true"
						onClick={handleMobileMenuOpen}
						color="inherit"
						>
						<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
		<MenuList checked={checked} categories={cats} filterByCategory={filterByCategory} />
		</div> 
	);
}
function mapStateToProps(state) {
	return {
		user: state.user,
		productsCar: state.productsCar,
	};
}
export default connect(mapStateToProps, {
	filterByCategory,
	getProducts,
	getUser,
	logout,
	getUsers,
})(NavBar);
