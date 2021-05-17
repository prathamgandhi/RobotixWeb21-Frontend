import React, {Fragment} from "react";

function Comingsoon(){
   return (
  <Fragment>
         <div className="coming-soon bg_img" data-background="./images/coming-soon.jpg">
            <div className="container">
                <div className="coming-wrapper">
                    <h1 className="title">COMING SOON</h1>
                    <ul className="countdown">
                        <li>
                            <h3 className="c-title"><span className="days">00</span></h3>
                            <p className="days_text">days</p>
                        </li>
                        <li>
                            <h3 className="c-title"><span className="hours">00</span></h3>
                            <p className="hours_text">hours</p>
                        </li>
                        <li>
                            <h3 className="c-title"><span className="minutes">00</span></h3>
                            <p className="minu_text">minutes</p>
                        </li>
                        <li>
                            <h3 className="c-title"><span className="seconds">00</span></h3>
                            <p className="seco_text">seconds</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  </Fragment>
   );
}
export default Comingsoon;
