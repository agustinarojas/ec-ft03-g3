import React, { useState } from 'react';
import axios from 'axios';
import '../FormUsuario/Form.css';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


 function PayForm({user}) {
	const [state, setState] = useState({});
	const [redirect, setRedirect] = useState(false);
  const [redir, setRedir] = useState(false);
	const [error, setError] = useState(false);
  const [expanded, setExpanded] = useState('panel1');
	const handleOnChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

  function comprar() {
		return axios
			.put(`http://localhost:3005/orders/${user.id}`, {estado: 'completa'}, {withCredentials: true})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

  const handleCancel = () => {
		console.log('holaaa')
		return axios
			.put(`http://localhost:3005/orders/${user.id}`, {estado: 'activo'}, {withCredentials: true})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	const handleSubmit = (event, state) => {
		console.log(state)
		event.preventDefault();
		axios
			.put(`http://localhost:3005/users/${user.id}`, state, {withCredentials: true})
			.then(res => {
				if (res.data.error) {
					setError(true)
				} else { setError(false) }
			})
			.catch(error => console.log(error))
	};


	if (redirect && !error) {
		return <Redirect to="/paymentmethods" />;
	}

  if (redir && !error) {
		return <Redirect to="/users/:userId/orders"/>;
	}

  const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);


    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
      <div>
      <h3>Cómo querés pagar?</h3>
      <div>
        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Tarjeta de credito</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <form
              onSubmit={e => {
                e.preventDefault()
                handleSubmit(e, state);
                setTimeout(function () {
                setRedirect(true);
                }, 1500);
              }}>
              <div className="form-group">
                <label htmlFor="exampleInputNombre"></label>
                <input
                  name="nombre"
                  placeholder="Nombre"
                  type="text"
                  className="form-control"
                  id="exampleInputNombre"
                  onChange={e => handleOnChange(e)}
                />
                <label htmlFor="exampleInputApellido"></label>
                <input
                  name="apellido"
                  placeholder="Apellido"
                  type="text"
                  className="form-control"
                  id="exampleInputApellido"
                  onChange={e => handleOnChange(e)}
                />
                <label htmlFor="exampleInputDNI"></label>
                <input
                  name="dni"
                  placeholder="DNI"
                  type="number"
                  className="form-control"
                  id="exampleInputDNI"
                  onChange={e => handleOnChange(e)}
                />
                <label htmlFor="exampleInputEmail"></label>
                <input
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  onChange={e => handleOnChange(e)}
                />
                <label htmlFor="exampleInputNumTarjeta"></label>
                <input
                  name="numTarjeta"
                  placeholder="Numero de tarjeta"
                  type="number"
                  className="form-control"
                  id="exampleInputNumTarjeta"
                  onChange={e => handleOnChange(e)}
                />
                <label htmlFor="exampleInputCodSeguridad"></label>
                <input
                  name="codSeguridad"
                  placeholder="Codigo de seguridad"
                  type="number"
                  className="form-control"
                  id="exampleInputCodSeguridad"
                  onChange={e => handleOnChange(e)}
                />
                <label htmlFor="exampleInputFechaExp"></label>
                <input
                  name="fechaExp"
                  placeholder="Fecha de expiracion"
                  type="date"
                  className="form-control"
                  id="exampleInputFechaExp"
                  onChange={e => handleOnChange(e)}
                />
                <Button
            		 variant="contained"
            		 className='skere'
            		 type='button'
            		 value="button"
            		 onClick={() => {comprar(); setRedir(true)}}
            		>
            			Comprar
            		</Button>
              </div>
            </form>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Efectivo</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>



            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>
    );
  }

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(PayForm);
