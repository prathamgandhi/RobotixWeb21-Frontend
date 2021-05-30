import React, {Fragment} from "react";


function Navbar(){
    
    
return(
  <Fragment>
   <header class="header-section">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <a href="index.html">
                        <img src="./assets/images/favicon.png" alt="logo" style={{height:"70px", width:"50px", paddingTop:"10px", paddingBottom:"10px"}}/>
                    </a>
                </div>
                <ul class="menu">
                    <li>
                        <a href="#">Home</a>
                       
                    </li>
                    <li>
                        <a href="#1">About Us</a>
                    
                    </li>
                   
                    <li>
                        <a href="#0">Events</a>
                        
                    </li>
                    <li>
                        <a href="#0">Team</a>
                        
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                   
                </ul>
                <div class="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
            </div>
        </div>
    </header> 
 </Fragment>
 )
}

export default Navbar;