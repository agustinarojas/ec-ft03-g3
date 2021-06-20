import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useStyles } from './UseStyles';
	
export default function MenuList({checked, categories, filterByCategory}) {
	const classes = useStyles();

	function generate() {
		return categories.map((value) =>
			React.cloneElement(
				<Link to={'/category/' + value.titulo} onClick={() => filterByCategory(value.titulo)} > 
				</Link>,
				{key: value.id, className: classes.link },
				<MenuItem className={classes.items} >
					<ListItemText
						primary={value.titulo}
					/>
				</MenuItem>
			),
		);
	}

   return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<Slide direction="right" in={checked} mountOnEnter unmountOnExit>
					<Paper elevation={4} className={classes.paper}>
					<Typography variant="h4" component="h2" className={classes.categoriesTittle} >
						Categorías
					</Typography>						
					<List>
							{generate()}
						</List>
					</Paper>
				</Slide>
			</div>
		</div>   
   )
}



