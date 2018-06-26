require('./OurWorksMain.scss')
import React from 'react';

const MainOurWorks = () => {
    return (
        <section className="MainOurWorks" >
            <h2>OUR PROJECTS</h2>
            <div className="MainOurWorksOverview" >
                <div className="MainOurWorksOverviewItem" >
                    <div className="MainOurWorksOverviewItemInner" >
                        <span className="MainOurWorksOverviewItemInnerTitle" >
                            Title
                        </span>
                        <div className="MainOurWorksOverviewItemInnerLiner"></div>
                        <p className="MainOurWorksOverviewItemInnerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, unde?</p>
                    </div>
                </div>
                <div className="MainOurWorksOverviewItem">
                    <div className="MainOurWorksOverviewItemInner" >
                        <span className="MainOurWorksOverviewItemInnerTitle" >
                            Title
                        </span>
                        <div className="MainOurWorksOverviewItemInnerLiner"></div>
                        <p className="MainOurWorksOverviewItemInnerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, unde?</p>
                    </div>
                </div>
                <div className="MainOurWorksOverviewLink">
                    <div className="MainOurWorksOverviewLinkShadow" ></div>
                    <div className="MainOurWorksOverviewLinkArr" style={{backgroundImage: `url(${'https://image.ibb.co/eS32Uo/gallery_arrow_painted.png'})`}} ></div>
                    <div className="MainOurWorksOverviewLinkText" >
                        <p>CHECK OUT</p>
                        <p>GALLERY</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainOurWorks;