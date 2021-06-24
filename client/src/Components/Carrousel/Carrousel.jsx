import React from 'react';
import peluche from './peluche.jpg';
import avion from './avion.jpg';
import mario from  './mario.jpg';

export default function Carrousel(){

   return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ margin: '-15px 0 25px 0' }} >
         <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         </ol>
         <div className="carousel-inner"  >
            <div className="carousel-item active">
               <img className="d-block w-100" src={peluche} alt="First slide" style={{ height: '70vh' }} />
            </div>
            <div className="carousel-item">
               <img className="d-block w-100" src={avion} alt="Second slide" style={{ height: '70vh' }} />
            </div>
            <div className="carousel-item">
               <img className="d-block w-100" src={mario} alt="Third slide" style={{ height: '70vh' }} />
            </div>
         </div>
         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
            <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" ></span>
            <span className="sr-only" >Next</span>
         </a>
   </div>
   )
}