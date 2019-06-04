import React from 'react';


class About extends React.Component {
  render() {
		
  	return (
  		<section id="about" className="about">
         <div className="about-decor">
            <div className="about-circle1"><img src="assets/images/team1.png" alt="team1" /></div>
            <div className="about-circle2"><img src="assets/images/main-banner1.png" alt="banner1" /></div>
         </div>
         <div className="container">
            <div className="row ">
               <div className="col-md-6">
                  <div className="about-contain">
                     <div>
                        <h2 className="title"><span>N</span>osotros</h2>
                        <p className="caption-about">Somos un aliado estratégico dedicado a brindarte servicios de alta calidad, 
                                                   eficiencia y rapidez; estamos orientados al desarrollo de Diseños Corporativo, 
                                                   Desarrollo web y Gestión de redes sociales todo lo que tu empresa necesita para 
                                                   estar a la vanguardia de las nuevas tendencias Smart Business.</p>
                        <div className="row sm-mb">
                           <div className="col-6">
                              <ul className="about-style">
                                 <li className="abt-hover">
                                    <div className="about-icon">
                                       <div className="icon-hover">
                                          <img src="assets/images/icon1.png" alt="easy-to-customized" />
                                       </div>
                                    </div>
                                    <div className="about-text">
                                       <h3>ReactJS</h3>
                                    </div>
                                 </li>
                                 <li className="abt-hover">
                                    <div className="about-icon">
                                       <div className="icon-hover">
                                          <img src="assets/images/icon3.png" alt="easy-to-use" />
                                       </div>
                                    </div>
                                    <div className="about-text">
                                      <h3>React Native</h3>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="col-6">
                              <ul className="about-style">
                                 <li className="abt-hover">
                                    <div className="about-icon">
                                       <div className="icon-hover">
                                          <img src="assets/images/icon2.png" alt="Awasome-Design" />
                                       </div>
                                    </div>
                                    <div className="about-text">
                                      <h3>MailChimp</h3>
                                    </div>
                                 </li>
                                 <li className="abt-hover">
                                    <div className="about-icon">
                                       <div className="icon-hover">
                                          <img src="assets/images/icon4.png" alt="SEO-Friendly" />
                                       </div>
                                    </div>
                                    <div className="about-text">
                                       <h3>SEO y SEM</h3>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="top-margin">
                           <button type="button" className="btn btn-custom theme-color">Nuestros Servicios</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 d-medium-none">
                  <div className="about-right">
                     <div className="about-phone">
                        <img  src="assets/images/aboutus.png" className="img-fluid" alt="aboutus" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}


export default About;