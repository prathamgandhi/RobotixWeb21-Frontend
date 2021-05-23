import React, { Fragment } from "react";



export const Team = () => {
    const changeDomain = (domain,j) => {
        window.TeamDomain(domain,j);
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

        <div className="team-tab">
            <button className="tablinks" onClick={() => {changeDomain("core-members",'0')}} >Core Members</button>
            <button className="tablinks" onClick={() => {changeDomain("managers",'1')}} >Managers</button>
            <button className="tablinks" onClick={() => {changeDomain("head-coordinator",'2')}} >head-coordinator</button>
        </div>

        <div id="core-members" className="tabcontent">
            <section id="team" className="team section-padding " tabindex="-1">
                <div className="container">

                    <div className="team-profile mt-5">
                        <div className="row mb-5">
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div id="managers" className="tabcontent">
            <section id="team" className="team section-padding " tabindex="-1">
                <div className="container">

                    <div className="team-profile mt-5">
                        <div className="row mb-5">
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" dataAnimationDelay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div id="head-coordinator" className="tabcontent">
            <section id="team" className="team section-padding " tabindex="-1">
                <div className="container">

                    <div className="team-profile mt-5">
                        <div className="row mb-5">
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: '1' }}>
                                <div className="d-flex team-member">
                                    <div className="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                                        <img src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="team-profile-1" className="rounded-circle" width="128" />
                                    </div>
                                    <div className="profile align-self-center" >
                                        <div className="name">Jhonny S. Brook</div>
                                        <div className="role">Web Developer</div>
                                        <div className="social-profile mt-3">
                                            <a href="/" title="Linkedin" className="font-medium grey-accent2 mr-2"> <i className="fa fa-facebook"> </i> </a>
                                            <a href="/" title="Twitter" className="font-medium grey-accent2 mr-2"> <i className="fa fa-linkedin"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-instagram"> </i> </a>
                                            <a href="/" title="Github" className="font-medium grey-accent2"> <i className="fa fa-github"> </i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Fragment>
    )
}

export default Team;
