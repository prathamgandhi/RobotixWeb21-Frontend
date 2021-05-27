
import React, { Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../service";
import { teamAction } from "../store/actions/actions.js";



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

            if(teamData.loading===false){

                window.activateTeam();


            }
            

    }, [])

    const changeDomain = (domain, j) => {
        window.TeamDomain(domain, j);
    };
    return (
        <Fragment>

        
            <div className="section-header">
                <h5 className="cate">Meet our most valued</h5>
                <h2 className="title">Expert Team Members</h2>
                <p>
                    Our team of creative programmers,marketing experts, and members .we are to be doing what we love.
            </p>
            </div>


            {teamData.loading ? <div>loading...</div> :

                <Fragment>


                    <div className="team-tab">
                  
                        {Object.keys(teamData.teams).map((teamHeader, index) => {

                            if(index===0){
                                
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
                                <section id="team" className="team section-padding " tabindex="-1">
                                    <div className="container">
                                        <div className="row mb-5">


                                            {teamData.teams[teamCategory].map((member, index) => {

                                                return (

                                                    <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                                        <div className="d-flex team-member">
                                                            <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                                                <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                                            </div>
                                                            <div className="profile align-self-center" >
                                                                <div className="name">{member.name}</div>
                                                                <div className="role">{member.branch}</div>
                                                                <div className="social-profile mt-3">
                                                                    <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                                                    <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                                                    <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                                                    <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
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
