import React from 'react';


class Feature extends React.Component {
  render() {
		
  	return (
  		<section id="feature" className="feature">
         <div className="feature-decor">
            <div className="feature-circle1"><img src="assets/images/feature2.png" alt="" /> </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="feature-phone">
                  <img src="assets/images/222.png" className="img-fluid" alt="" />
               </div>
               <div className="offset-lg-4 col-lg-8">
                  <div className="row">
                     <div className="col-sm-12 mrgn-md-top">
                        <h2 className="title"><span>S</span>ervicios</h2>
                     </div>
                     <div className="col-12 col-md-6">
                        <ul className="feature-style">
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/1.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Diseño Corporativo</h3>
                              </div>
                              <div>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/3.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Diseño Grafico</h3>
                              </div>
                              <div>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/5.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>SEO & SEM</h3>
                              </div>
                              <div>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="col-12 col-md-6 sm-m-top">
                        <ul className="feature-style">
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/2.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Diseño Web</h3>
                              </div>
                              <div>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/4.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Web App</h3>
                              </div>
                              <div>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/6.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Community Management</h3>
                              </div>
                              <div>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}


export default Feature;