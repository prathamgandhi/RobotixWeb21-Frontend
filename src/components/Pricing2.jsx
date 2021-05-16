
const Pricing2 = () => {
    return (
        <section className="estimate-plan padding-top-2 padding-bottom">
        <div className="container">
            <div className="section-header mw-100">
                <h5 className="cate">Year Plan</h5>
                <h2 className="title">Get the whole team on board!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate corrupti dolor vero veritatis ad voluptas labore hic laboriosam suscipit tempora ipsum minus architecto saepe, natus quia assumenda a totam rem.</p>
            </div>            
            <div className="invest-range-area">
                <div className="main-amount">
                    <input type="text" className="calculator-invest" id="usd-amount" readonly />
                </div>
                <div className="user-range-area">
                    <div className="min-user">
                        <h5 className="title">1</h5>
                        <span className="info">January</span>
                    </div>
                    <div className="invest-amount" data-min="1.00 users" data-max="500 users">
                        <div id="usd-range" className="invest-range-slider"></div>
                    </div>
                    <div className="max-user">
                        <h5 className="title">12</h5>
                        <span className="info">December</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Pricing2
