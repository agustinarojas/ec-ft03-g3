import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getReviews } from '../../Actions/index';
import BeautyStars from 'beauty-stars';

function Reviews({reviews, getReviews}) {
  console.log(reviews)

  // useEffect(() => {
	// 	getReviews(1);
	// }, [reviews]);
  let suma = 0;
  for (var i = 0; i < reviews.length; i++) {
  suma = suma + parseInt(reviews[i].rating);
  }

	return (
		<div className="reviews">
			{
        reviews.length === 0 ? <h3>Este producto aun no tiene calificaciones</h3>
				: reviews?.map(r => (
				<div>
          <h4>Descripcion: {r.descripcion}</h4>
          <BeautyStars
            value={r.rating}
            size = {'24px'}
            gap = {'6px'}
            activeColor = {'66C3FF'}
          />
          <br/>
        </div>
			 ))
		 }
     <BeautyStars
       value={suma/reviews.length}
       size = {'24px'}
       gap = {'6px'}
       activeColor = {'66C3FF'}
     />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		reviews: state.reviews,
	};
}

export default connect(mapStateToProps, {getReviews})(Reviews);
