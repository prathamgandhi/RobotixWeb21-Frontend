import React, {Fragment} from "react";


function Navbar(){

    const scroll=(e)=>{
   
        document.getElementById(`${e.target.name}`).scrollIntoView({behavior:"smooth"})

    }

 
return(
  <Fragment>
   <header class="header-section navbar">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <a href="index.html">
                        <img src="./assets/images/favicon.png" alt="logo" style={{height:"70px", width:"50px", paddingTop:"10px", paddingBottom:"10px"}}/>
                    </a>
                </div>
                <ul class="menu">
                    <li>
                    <button name="main-section" className="navbtn" onClick={scroll}>Home</button>
                       
                    </li>
                    <li>
                    <button name="about-section" className="navbtn" onClick={scroll}>About</button>
                    
                    </li>
                   
                    <li>
                    <button name="events-section" className="navbtn" onClick={scroll}>Events</button>
                        
                    </li>
                    <li>
                    <button name="team-section" className="navbtn" onClick={scroll}>Team</button>
                        
                    </li>
                    <li>
                        <button name="contact-section" className="navbtn" onClick={scroll}>Contact</button>
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