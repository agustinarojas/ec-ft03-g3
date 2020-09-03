import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import BeautyStars from 'beauty-stars';

export default function OrderProdItem({titulo, precio, cantidad, imagen, id, user}) {
	const [state, setState] = useState(false);
	const [tarea, setTarea] = useState('');
	const [value, setValue] = useState(0);

	const submitRate = (idUser, idProd) => {
		// CAMBIAR DONDE HACE SUBMIT Y SACARLE EL HARDCODEO JAJA! AGREGAR COMENTARIOS. RENDERIZAR VALOR DE ESTRELLITA PROEDIO
		console.log(idUser);
		return Axios.post(
			`http://localhost:3005/products/${idUser}/review`,
			{
				rating: value,
				descripcion: tarea,
				productId: idProd,
				userId: idUser,
			},
			{withCredentials: true},
		)
			.then(success => console.log(success))
			.catch(err => console.log(err));
	};

	const handleOnClick = () => {
		setState(true);
	};
	var control;
	return (
		<div>
			<p>Titulo: {titulo}</p>
			<p>Precio: ${precio}</p>
			<p>Cantidad:{cantidad} </p>
			<img src={imagen} />
			<Link onClick={() => handleOnClick()}>
				<span>Calificar Producto</span>
			</Link>
			{state ? (
				<div>
					<textarea id="body-field" name="body" onChange={e => setTarea(e.target.value)}></textarea>
					<BeautyStars
						value={value}
						size={'24px'}
						gap={'6px'}
						activeColor={'66C3FF'}
						onChange={value => setValue(value)}
					/>
					{!value || !tarea ? (control = true) : false}
					<button
						disabled={control ? true : false}
						onClick={() => {
							submitRate(user.id, id);
							setState(false);
						}}>
						Calificar
					</button>
				</div>
			) : null}
		</div>
	);
}
