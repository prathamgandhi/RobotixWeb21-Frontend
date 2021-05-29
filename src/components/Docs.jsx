import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import api from "../service";
import { docsAction } from "../store/actions/actions"

function Docs() {
    const docsData = useSelector(state => state.docsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        api.get("/extras/diy/").then(response => {
            console.log(response.data);
            let docs = response.data;
            dispatch(docsAction({ loading: false, docs }));
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Fragment>

            <div className="section-header">
                <h2 className="title">Documents</h2>
            </div>
            <div className="marquee-wrapper">
                <div className="container">
                    {docsData.loading ? <div class="d-flex justify-content-center"><div class="spinner-border text-secondary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div></div> :
                        <Fragment>
                            <div className="marquee-block" style={{ width: `${250 * docsData.docs.length}px` }}>

                                <div className="marquee-inner to-left" onmouseover="this.stop();" >
                                    <span>
                                        <Fragment>
                                            {docsData.docs.map((doc, index) => {
                                                return (

                                                    <div className="marquee-item">
                                                        <img src={doc.photo} alt="..." />
                                                        <div className="documenttitle">{doc.title}</div>
                                                        <div style={{ fontSize: ".8rem" }}>Mentor: {doc.mentor}</div>
                                                        <div style={{ fontSize: ".8rem" }}>Members: {doc.members}</div>
                                                        <div className="downloadbtn"><a href={doc.file} download={doc.title}><i class="fa fa-download"></i></a></div>
                                                    </div>

                                                )
                                            })}
                                        </Fragment>





                                    </span>
                                    <span>

                                        <Fragment>
                                            {docsData.docs.map((doc, index) => {
                                                return (

                                                    <div className="marquee-item">
                                                        <img src={doc.photo} alt="..." />
                                                        <div className="documenttitle">{doc.title}</div>
                                                        <div className="downloadbtn"><a href={doc.file} download={doc.title}><i class="fa fa-download"></i></a></div>
                                                    </div>

                                                )
                                            })}
                                        </Fragment>





                                    </span>
                                </div>

                            </div>
                        </Fragment>

                    }
                    {/* <span>
					<div className="marquee-item">
                    <img src="https://templatelab.com/wp-content/uploads/2021/04/Proposal-Cover-Page-Template-TemplateLab.com_-scaled.jpg"  alt="..."/>
                    <div className="documenttitle">RobotiX Manual</div>
                    <div className="downloadbtn"><i class="fa fa-download"></i></div>
					</div>
					
				</span> */}


                </div>
            </div>
        </Fragment>
    );
}
export default Docs;
