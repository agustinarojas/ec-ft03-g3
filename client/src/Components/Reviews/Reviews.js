import React, {useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getReviews } from '../../Actions/index';

function Reviews({reviews, getReviews}) {
  console.log(reviews)

  useEffect(() => {
		getReviews(1);
	}, [reviews]);

	return (
		<div className="reviews">
			{
        reviews.length === 0 ? <p>Este producto aun no tiene calificaciones</p>
				: reviews?.map(r => (
				<div>
          <h3>descripcion= {r.descripcion}</h3>
          <h3>rating= {r.rating}</h3>
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
