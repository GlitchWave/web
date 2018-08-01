require('./OurWorksMain.scss');
import React from 'react';
import { Link } from 'react-router-dom';

const MainOurWorks = () => {
  return (
    <section className="MainOurWorks">
      <h2>OUR PROJECTS</h2>
      <div className="MainOurWorksOverview">
        <div className="MainOurWorksOverviewItem">
          <div className="MainOurWorksOverviewItemInner">
            <span className="MainOurWorksOverviewItemInnerTitle">Title</span>
            <div className="MainOurWorksOverviewItemInnerLiner" />
            <p className="MainOurWorksOverviewItemInnerText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              unde?
            </p>
          </div>
        </div>
        <div className="MainOurWorksOverviewItem">
          <div className="MainOurWorksOverviewItemInner">
            <span className="MainOurWorksOverviewItemInnerTitle">Title</span>
            <div className="MainOurWorksOverviewItemInnerLiner" />
            <p className="MainOurWorksOverviewItemInnerText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              unde?
            </p>
          </div>
        </div>
        <Link to="/portfolio" className="MainOurWorksOverviewLink">
          <div className="MainOurWorksOverviewLinkShadow" />
          <div
            className="MainOurWorksOverviewLinkArr"
            style={{
              backgroundImage: `url(${'https://image.ibb.co/eS32Uo/gallery_arrow_painted.png'})`
            }}
          />
          <div className="MainOurWorksOverviewLinkText">
            <p>CHECK OUT</p>
            <p>GALLERY</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MainOurWorks;
