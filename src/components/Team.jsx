
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../service";
import { teamAction } from "../store/actions/actions.js";
import Reveal from "react-reveal/Reveal";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import PhoneIcon from "@material-ui/icons/Phone";
export const Team = () => {

    let teamData = useSelector(state => state.teamReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(teamData.teams).length === 0) {

            api.get("/about/team/")
                .then(response => {
                    let newTeam = response.data;

                    for (const key in newTeam) {

                        if (newTeam[key].length === 0) {
                            delete newTeam[key];
                        }

                    }

                    dispatch(teamAction({ teams: newTeam, loading: false }));
                    window.activateTeam();

                })
                .catch(error => {

                })
        }

        if (teamData.loading === false) {

            window.activateTeam();


        }


    }, [])


    const changeDomain = (domain, j) => {
        window.TeamDomain(domain, j);
    };
    return (
        <Fragment>
         
            {console.log("team", teamData.teams)}
          <Reveal effect="fadeInUp">

            <div id="team-section" className="robotext">
            
            <div className="Roboimg" style={{width:'20%', paddingBottom:'20px'}}>
                <img alt="RobotImg" src="/assets/images/robot2.png"/>
            </div>
        
            <div  className="section-header" style={{width:'70%',margin:'0px auto',wordWrap:'break-word'}}>
                    <h5 className="cate">Meet our most valued</h5>
                    <h2 className="title">Team Members</h2>
                    <p>
                    Our team of creative programmers, marketing experts, designers, sponsors, tech enthusiasts. We are doing what we love.
                </p>
            </div>
            </div>
          </Reveal>  

            {teamData.loading ? <div className="d-flex justify-content-center"><div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div></div> :

                <Fragment>

                 
                    <div className="team-tab" style={{clear:'left'}}>
                  

                        {Object.keys(teamData.teams).map((teamHeader, index) => {

                            if (index === 0) {

                                return (

                                    <button id="default-team-tab" key={index} className="tablinks" onClick={() => { changeDomain(teamHeader, index) }} >{teamHeader}</button>
                                )

                            }

                            return (

                                <button className="tablinks" key={index} onClick={() => { changeDomain(teamHeader, index) }} >{teamHeader}</button>
                            )

                        })


                        }


                    </div>




                    {Object.keys(teamData.teams).map((teamCategory, index) => {

                        return (

                            <div id={teamCategory} key={index} className="tabcontent">
                                <section id="team" className="team section-padding " tabIndex="-1">
                                    <div className="container">
                                        <div className="row mb-5">


                                            {teamData.teams[teamCategory].map((member, index) => {

                                                return (

                                                    <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                                        <div className="d-flex team-member">
                                                            <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                                                {/* <img src="https://icon-library.com/images/ai-icon/ai-icon-7.jpg" alt="team-profile-1" className="rounded-circle" width="128" /> */}
                                                                <img src={member.photo} alt="team-profile-1" className="rounded-circle" width="128" />
                                                            </div>
                                                            <div className="profile align-self-center" >
                                                                <div className="name">{member.name}</div>
                                                                <div className="role">{member.branch}</div>
                                                                <div className="social-profile mt-3"> 
                                                                    <a target="_blank" href={member.github_url} title="Linkedin" className="font-medium grey-accent2 mr-2"><LinkedInIcon fontSize="default"/> </a>
                                                                    <a  href={member.fb_url} title="Facebook" className="font-medium grey-accent2 mr-2"><FacebookIcon fontSize="default"/></a>
                                                                    <a target="_blank" href={member.instagram_url} title="Instagram" className="font-medium grey-accent2 mr-2"> <InstagramIcon fontSize="default"/></a>
                                                                   <a target="_blank" href={`mailto:${member.email_id}`} title="Mail" className="font-medium grey-accent2"> <MailOutlineIcon/></a> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>




                                                )
                                            }
                                            )}

                                        </div>



                                    </div>
                                </section>
                            </div>
                        )



                    })

                    }



                 

                </Fragment>

            }
        
        
        </Fragment>
    )
}

export default Team;
