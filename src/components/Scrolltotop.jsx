import React, {Fragment} from "react";

function Scrolltotop(){
   return (
  <Fragment>
          <div className="preloader">
        <div className="preloader-inner">
            <div className="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div>
  </Fragment>
   );
}
export default Scrolltotop;
