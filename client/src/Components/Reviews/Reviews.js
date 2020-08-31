import React, {useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getReviews } from '../../Actions/index';

function Reviews({reviews, getReviews}) {
  console.log(reviews)

  // useEffect(() => {
	// 	getReviews(1);
	// }, [reviews]);

	return (
		<div className="reviews">
			{
        reviews.length === 0 ? <h3>Este producto aun no tiene calificaciones</h3>
				: reviews?.map(r => (
				<div>
          <h4>Descripcion: {r.descripcion}</h4>
          <h4>Rating: {r.rating}</h4>
          <br/>
        </div>
			 ))
		 }
		</div>
	);
}

function mapStateToProps(state) {
	return {
		reviews: state.reviews,
	};
}

export default connect(mapStateToProps, {getReviews})(Reviews);
