import React, {Fragment} from "react";

function Logoslider(){
   return (
  <Fragment>
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
                    <img src="./images/banner/banner16/01.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./images/banner/banner16/02.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./images/banner/banner16/03.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./images/banner/banner16/04.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./images/banner/banner16/05.png" alt="banner"/>
                </div>
                <div className="item">
                    <img src="./images/banner/banner16/06.png" alt="banner"/>
                </div>
            </div>
        </div>
    </section>
  </Fragment>
   );
}
export default Logosldier;
