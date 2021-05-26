import {Fragment} from 'react'

const Pricing = () => {
    return (
      <Fragment>
        <section
          className="pricing-section padding-top oh padding-bottom pb-md-0 bg_img pos-rel"
          data-background="./assets/images/bg/pricing-bg.jpg"
          id="pricing"
        >
          <div className="top-shape d-none d-md-block">
            <img src="./assets/css/img/top-shape.png" alt="css" />
          </div>
          <div className="bottom-shape d-none d-md-block">
            <img src="./assets/css/img/bottom-shape.png" alt="css" />
          </div>
          <div
            className="ball-2"
            data-paroller-factor="-0.30"
            data-paroller-factor-lg="0.60"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <img src="./assets/images/balls/1.png" alt="balls" />
          </div>
          <div
            className="ball-3"
            data-paroller-factor="0.30"
            data-paroller-factor-lg="-0.30"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <img src="./assets/images/balls/2.png" alt="balls" />
          </div>
          <div
            className="ball-4"
            data-paroller-factor="0.30"
            data-paroller-factor-lg="-0.30"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <img src="./assets/images/balls/3.png" alt="balls" />
          </div>
          <div
            className="ball-5"
            data-paroller-factor="0.30"
            data-paroller-factor-lg="-0.30"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
          >
            <img src="./assets/images/balls/4.png" alt="balls" />
          </div>
          <div
            className="ball-6"
            data-paroller-factor="-0.30"
            data-paroller-factor-lg="0.60"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <img src="./assets/images/balls/5.png" alt="balls" />
          </div>
          <div
            className="ball-7"
            data-paroller-factor="-0.30"
            data-paroller-factor-lg="0.60"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
          >
            <img src="./assets/images/balls/6.png" alt="balls" />
          </div>
          <div className="container">
            <div className="section-header pb-30 cl-white">
              <h5 className="cate">Upcoming Events</h5>
              <h2 className="title">RobotThon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                architecto dicta, suscipit, fugiat repudiandae, aspernatur
                dolore eos nesciunt harum iure eum? Cumque ipsa pariatur
                laborum, eius aut exercitationem culpa odit.
              </p>
            </div>
            <div className="range-wrapper-2">
              <div className="pricing-range">
                <div className="pricing-range-top pt-0">
                   <div className="tags-area">
                                <h3 className="tags">Schedule</h3>
                            </div>
                            { /*
                            <div className="amount-area">
                                <div className="item">
                                    <h2 className="title"><sup>$</sup>15.00</h2>
                                    <span className="info">Per Month</span>
                                </div>
                                <div className="item">
                                    <h2 className="title"><sup>$</sup>199.00</h2>
                                    <span className="info">Per Year</span>
                                </div>
                            </div>
                            <div className="invest-range-area">
                                <div className="invest-amount" data-min="1.00 USD" data-max="1000 USD">
                                    <div id="usd-range" className="invest-range-slider"></div>
                                </div>
                            </div> 
                    </div>  */}
                  <div className="history-slider owl-theme owl-carousel">
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2014</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2015</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2016</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2017</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2018</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2019</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2021</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2014</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2015</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2016</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2017</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2018</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2019</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2021</span>
                      </div>
                    </div>
                  </div> 
                </div>
                <div className="pricing-range-bottom">
                  {/* <div className="history-slider owl-theme owl-carousel">
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2014</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2015</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2016</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2017</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2018</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2019</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2021</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2014</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2015</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2016</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2017</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2018</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2019</span>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="history-content">
                        <div className="content">
                          <h6 className="title">We Are Growing</h6>
                          <p>
                            emeritis hibridas hic dignus de fortis, altus
                            orexisstoria
                          </p>
                        </div>
                      </div>
                      <div className="history-thumb">
                        <div className="anime-item-2"></div>
                        <span>2021</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
}

export default Pricing
