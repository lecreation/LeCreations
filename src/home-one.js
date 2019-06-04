import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Feature from './components/feature';
import ScreenShot from './components/screenshot';
import Team from './components/team';
import Blog from './components/blog';
import Price from './components/price';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import Subscribe from './components/subscribe';
import Footer from './components/footer';
import Tilt from 'react-tilt';

class HomeOne extends React.Component {
  render() {
  	document.body.classList.remove('landing-page');
	document.body.classList.remove('home-style');
  	document.body.classList.remove('three');
  	document.body.classList.remove('home-style-two');
  	return (
  		<div>
  			{/* Navbar Component*/}
  			<Navbar />

  			{/* Home One Section Start */}
  			<section id="home" className="home">
			   <div className="home-decor">
			      <div className="home-circle1"><img  src="assets/images/main-banner3.png" alt="" /></div>
			      <div className="home-circle2"><img src="assets/images/main-banner12.png" alt="" /></div>
			      <div className="home-circle3"><img src="assets/images/main-banner1.png" alt="" width="200px" /></div>
			   </div>
			   <div className="container">
			      <div className="row">
			         <div className="col-md-5">
			            <div className="home-contain">
			               <div>
			                  <img src="assets/images/faviconL.png" alt="caption-img" className="caption-img" width="100px"/>
			                  <h4></h4>
			                  <h1><span className="f-bold">LeC</span>reations
			                  </h1>
			                  <p>Aportando las mejores Ideas a tu imagen Corporativa</p>
			                  </div>
			            </div>
			         </div>
			         <div className="col-sm-6 offset-md-1">
			            <div className="home-right">
				            <Tilt options={{ perspective: 110, speed: 400, max: 1.2, scale:1 }}>
				               <img src="assets/images/mobile.png" className="img-fluid" alt="mobile" />
				            </Tilt>
			            </div>
			         </div>
			      </div>
			   </div>
			</section>
  			{/* Home One Section End */}

			{/* About Component*/}
			<About />

			{/*Feature Component*/}
			<Feature />

			{/*ScreenShot Component*/}
			<ScreenShot />

			{/*Team Component
			<Team />*/}

			{/*Price Component*/}
			<Price />
			
			{/*Blog Component*/}
			<Blog />

			{/*Testimonial Component
			<Testimonial />*/}
			
			{/*Contact Component
			<Contact />*/}

			{/*Subscription Component
			<Subscribe />*/}

			{/*Footer Component*/}
			<Footer />
  		</div>
  	);
  }
}

export default HomeOne;