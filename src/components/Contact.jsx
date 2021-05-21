import React, {Fragment} from "react";

function Contact(){
   return (
  <Fragment>
  <section className="page-header single-header bg_img oh" data-background="./assets/images/page-header.png">
        <div className="bottom-shape d-none d-md-block">
            <img src="./assets/css/img/page-header.png" alt="css"/>
        </div>
    </section>
       <section className="contact-section padding-top padding-bottom">
        <div className="container">
            <div className="section-header mw-100 cl-white">
                <h2 className="title">Contact Robotix Club</h2>
                <p>Whether you're looking for a demo, have a support question or a commercial query get in touch.</p>
            </div>
            <div className="row justify-content-center justify-content-lg-between">
                <div className="col-lg-7">
                    <div className="contact-wrapper">
                        <h4 className="title text-center mb-30">Get in Touch</h4>
                        <form className="contact-form" id="contact_form_submit">
                            <div className="form-group">
                                <label for="name">Your Full Name</label>
                                <input type="text" placeholder="Enter Your Full Name" id="name" required/>
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="text" placeholder="Enter Your Phone Number " id="phone" required/>
                            </div>
                            <div className="form-group">
                                <label for="email">Your Email </label>
                                <input type="text" placeholder="Enter Your Email " id="email" required/>
                            </div>
                            <div className="form-group">
                                <label for="subject">Your Subject</label>
                                <input type="text" placeholder="Enter Your Subject " id="subject" required/>
                            </div>
                            <div className="form-group mb-0">
                                <label for="message">Your Message </label>
                                <textarea id="message" placeholder="Enter Your Message" required></textarea>
                                <div className="form-check">
                                    <input type="checkbox" id="check" checked/><label for="check">I agree to receive emails, newsletters and promotional messages</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-content">
                        <div className="man d-lg-block d-none">
                            <img src="./assets/images/contact/man.png" alt="bg"/>
                        </div>
                        <div className="section-header left-style">
                            <h3 className="title">Have questions?</h3>
                            <p>Have questions about payments or price 
                                plans? We have answers!</p>
                            {/* <a href="#0">Read F.A.Q <i className="fas fa-angle-right"></i></a> */}
                        </div>
                        <div className="contact-area">
                            <div className="contact-item">
                                <div className="contact-thumb">
                                    <img src="./assets/images/contact/contact1.png" alt="contact"/>
                                </div>
                                <div className="contact-contact">
                                    <h5 className="subtitle">Email Us</h5>
                                    <a href="Mailto:info@mosto.com">info@mosto.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-thumb">
                                    <img src="./assets/images/contact/contact2.png" alt="contact"/>
                                </div>
                                <div className="contact-contact">
                                    <h5 className="subtitle">Call Us</h5>
                                    <a href="Tel:565656855">+1 (987) 664-32-11</a>
                                    <a href="Tel:565656855">+1 (987) 664-32-11</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-thumb">
                                    <img src="./assets/images/contact/contact3.png" alt="contact"/>
                                </div>
                                <div className="contact-contact">
                                    <h5 className="subtitle">Visit Us</h5>
                                    <p>4293 Euclid Avenue, Los Angeles,CA 90012</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </Fragment>
   );
}
export default Contact;
