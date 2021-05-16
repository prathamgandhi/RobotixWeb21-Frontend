import React, {Fragment} from "react";

function Main(){
   return (
  <Fragment>
       

    
    <section className="banner-1 bg_img oh" data-background="./assets/images/banner/banner-bg-1.jpg">
        <div className="dot-1 d-none d-lg-block">
            <img src="./assets/images/banner/dot-big.png" alt="banner" />
        </div>
        <div className="dot-2 d-none d-lg-block">
            <img src="./assets/images/banner/dot-big.png" alt="banner"/>
        </div>
        <div className="dot-3">
            <img src="./assets/images/banner/dot-sm.png" alt="banner"/>
        </div>
        <div className="dot-4">
            <img src="./assets/images/banner/dot-sm.png" alt="banner"/>
        </div>
        <div className="banner-1-shape d-none d-lg-block">
            <img src="./assets/css/img/banner1-shape.png" alt="css"/>
        </div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner-content-1 cl-white">
                        <h1 className="title">Robotix Club</h1>
                        <p className="strong">
                            NATIONAL INSTITUTE OF TECHNOLOGY,RAIPUR
                        </p>
                        <p>We, Robotix Club of NIT Raipur, constitute enthusiasts and experts in the field of robotics who deal with the application of robotics in real life situations....</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
 

    <section className="logo-slider-section padding-bottom-2 padding-top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="section-header mw-100">
                        <h3 className="title">Our past Sponsers</h3>
                    </div>
                </div>
            </div>
            <div className="logo-slider owl-theme owl-carousel">
                <div className="item">
                    <img src="./assets/images/banner/banner16/01.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./assets/images/banner/banner16/02.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./assets/images/banner/banner16/03.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./assets/images/banner/banner16/04.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./assets/images/banner/banner16/05.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./assets/images/banner/banner16/06.png" alt="banner"/>
                </div>
            </div>
        </div>
    </section>
   




  </Fragment>
   );
}
export default Main;
