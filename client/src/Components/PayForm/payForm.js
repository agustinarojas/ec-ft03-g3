import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {FormControl, Container, InputLabel, Input, FormHelperText, FormControlLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import './payForm.css'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


 function PayForm({user,productsCar}) {
	const [state, setState] = useState({});
	const [redirect, setRedirect] = useState(false);
  const [redir, setRedir] = useState(false);
  const [error, setError] = useState(false);
  
  const [expanded, setExpanded] = useState('panel1');
  const classes = useStyles();
	const handleOnChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
 
	function comprar() {
		const {carritoId} = productsCar[0]?.lineorder;
		console.log(carritoId);
		return axios
			.put(
				`http://localhost:3005/orders/${user.id}`,
				{estado: 'completa', carritoId},
				{withCredentials: true},
			)
			.then(res => console.log(res))
			.catch(err => console.log(err));
      }

	if (redirect && !error) {
		return <Redirect to="/sendform" />;
	}

  if (redir && !error) {
		return <Redirect to={`/users/${user.id}/orders`}/>;
	}
    return (
      <div>
        {user.id  ? (
        <div>
        <div className ='alls'>
      <h3>Cómo querés pagar?</h3>
      </div>
      <div>
            <Container className = {classes.root}>
            <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography className={classes.heading}>Tarjeta de credito</Typography>
           </AccordionSummary>
           <AccordionDetails>
           <Typography>

           
            <FormControl
              >
              <Container className="form-group">
                <FormControl>
                <InputLabel htmlFor="Nombre">Nombre</InputLabel>
                <Input
                  style={{marginRight: '5%', width: '100%'}}
                  type = "Nombre"
                  id="Nombre"
                  onChange={e => handleOnChange(e)}
                  />
                  </FormControl>

                <FormControl style= {{marginRight: '4%', marginLeft: '4%'}}>
                <InputLabel htmlFor="Apellido">Apellido</InputLabel>
                <Input
                style={{marginRight: '5%', width: '100%'}}
                  type= "Apellido"
                  id="Apellido"
                  onChange={e => handleOnChange(e)}
                />
                </FormControl>

                <FormControl style= {{marginRight: '4%'}}>
                <InputLabel htmlFor="DNI">DNI</InputLabel>
                <Input
                style={{marginRight: '5%', width: '100%'}}
                  type = "number"
                  id="DNI"
                  onChange={e => handleOnChange(e)}
                  />
                  </FormControl>

                <FormControl style= {{marginRight: '4%'}}>
                <InputLabel htmlFor="Email">Email</InputLabel>
                <Input
                style={{marginRight: '5%', width: '100%'}}
                  type = "email"
                  aria-describedby="my-helper-text"
                  id="Email"
                  onChange={e => handleOnChange(e)}
                  />
                  <FormHelperText>
                    No compartiremos tu email con nadie.
                  </FormHelperText>
                  </FormControl>

                <FormControl style= {{marginRight: '4%'}}>
                <InputLabel htmlFor="Tarjeta">Numero de Tarjeta</InputLabel>
                <Input
                style={{marginRight: '5%', width: '100%'}}
                  type = "string"
                  id="NumTarjeta"
                  aria-describedby="my-helper-text"
                  onChange={e => handleOnChange(e)}
                  />
                  </FormControl>

                <FormControl style= {{marginRight: '4%'}}>
                <InputLabel htmlFor="CodSeguridad">Codigo de Seguridad</InputLabel>
                <Input
                style={{marginRight: '5%', width: '100%'}}
                  type = "string"
                  id="CodSeguridad"
                  onChange={e => handleOnChange(e)}
                  />
                  </FormControl>

                <FormControl style= {{marginRight: '4%'}}>
                <InputLabel htmlFor="FechaExp"></InputLabel>
                <Input          
                  type = "date"
                  id="FechaExp"
                  onChange={e => handleOnChange(e)}
                  />
                  <FormHelperText>
                    Fecha de expiracion.
                  </FormHelperText>
                  </FormControl>
                <Button
                variant="contained"
                color = "primary"
                style={{position: 'relative', top: '1em', left: '12em'}}
            		onClick = {() => {comprar (); setRedir(true); }}
            		>
            			Comprar
            		</Button>
              </Container>
            </FormControl>
            </Typography>
            </AccordionDetails>
            </Accordion>
            </Container>
            <Container className = {classes.root}>
            <Accordion>
            <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography className={classes.heading}>Efectivo</Typography>
           </AccordionSummary>
           <AccordionDetails>
           <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography className={classes.heading}></Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
              <Button color= "primary" variant = "outlined">Comprar con Pago Facil</Button>
             </Typography>
           </AccordionDetails>
           <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography className={classes.heading}></Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
              <Button color= "primary" variant = "outlined">Comprar con Rapipago</Button>
             </Typography>
             </AccordionDetails>
             <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography className={classes.heading}></Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
              <Button color= "primary" variant = "outlined">Comprar con Mercado Pago</Button>
             </Typography>
             </AccordionDetails>
           </AccordionDetails>
            </Accordion>
            </Container>
      </div>
      <footer>
        <Button color = "primary" variant = "outlined" style={{left: '8%', position: 'relative', top: '25px'}} onClick = {() => setRedirect(true)}>
          Regresar
        </Button>
      </footer>
      </div>
        ) : (
          <Redirect to = "/"/>
        ) }
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
      productsCar: state.productsCar,
      user: state.user,
    };
  }
  export default connect(mapStateToProps)(PayForm);
