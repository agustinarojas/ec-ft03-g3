import React from 'react';
import {connect} from 'react-redux';
function Order({orders}) {
	console.log(orders);
	var total = 0;
	for (let i = 0; i < orders?.products?.length; i++) {
		total = total + orders?.products[i]?.precio;
	}
	return (
		<div className="productos">
			<div class="list-group">
				{orders?.products?.map((p, i) => (
					<a href="#" class="list-group-item list-group-item-action">
						{p.titulo} ${p.precio}
					</a>
				))}
			</div>
			<footer id="total">Total: $ {total}</footer>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		orders: state.orders,
	};
};

export default connect(mapStateToProps)(Order);
