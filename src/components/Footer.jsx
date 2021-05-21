import React, {Fragment} from "react";

function Footer(){
   return (
  <Fragment>
       <footer className="footer-section bg_img" data-background="./assets/images/footer/footer-bg.jpg">
            <div className="container">
                <div className="footer-top padding-top padding-bottom">
                    <div className="logo">
                        <a href="#0">
                            <img src="./assets/images/robotixLogo.png" style={{height:'140px', width:'350px', position:'relative', right:'100px'}} alt="logo"/>
                        </a>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="#0"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#0" className="active"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-google-plus-g"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <ul className="footer-link">
                        <li>
                            <a href="#0">About</a>
                        </li>
                        <li>
                            <a href="#0">FAQs</a>
                        </li>
                        <li>
                            <a href="#0">Contact</a>
                        </li>
                        <li>
                            <a href="#0">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#0">Privacy</a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>
                        Copyright © 2021.All Rights Reserved By <a href="#0">Robotix Club</a>
                    </p>
                </div>
            </div>
        </footer>
  </Fragment>
   );
}
export default Footer;
