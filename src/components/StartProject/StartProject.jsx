require('./StartProject.scss');
import React from 'react';
import CostCalculator from './components/CostCalculator/CostCalculator';
import CommonForm from '../shared/components/CommonForm/CommonForm';

const StartProject = () => {
  return (
    <section className="start-project">
      <div
        className="start-project--banner"
        style={{
          backgroundImage:
            'url(https://image.ibb.co/n1Kfyo/banner_1366_768.png)'
        }}
      >
        <p>Let us show you what what our work process looks like</p>
      </div>
      <div
        className="start-project--meeting"
        style={{
          backgroundImage: 'url(https://image.ibb.co/dpPur8/meeting_banner.png)'
        }}
      >
        <h3 className="typical--h3">MEETING</h3>
        <p className="typical--p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="start-project--spec"
        style={{
          backgroundImage:
            'url(https://image.ibb.co/iAbz8o/project_plan_banner.png)'
        }}
      >
        <h3 className="typical--h3">SPECIFICATION AND ESTIMATE</h3>
        <p className="typical--p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="start-project--ux"
        style={{
          backgroundImage: 'url(https://image.ibb.co/c5Kvr8/desing_banner.png)'
        }}
      >
        <h3 className="typical--h3">UX/UI DESIGN</h3>
        <p className="typical--p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="start-project--development"
        style={{
          backgroundImage:
            'url(https://image.ibb.co/eXN6W8/developing_banner.png)'
        }}
      >
        <h3 className="typical--h3">DEVELOPMENT</h3>
        <p className="typical--p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="start-project--QA"
        style={{
          backgroundImage: 'url(https://image.ibb.co/fyrpjT/test_banner.png)'
        }}
      >
        <h3 className="typical--h3">QA AND TESTING</h3>
        <p className="typical--p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="start-project--delivering"
        style={{
          backgroundImage: 'url(https://image.ibb.co/nsTfr8/done_banner.png)'
        }}
      >
        <h3 className="typical--h3">DELIVERING</h3>
        <p className="typical--p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="start-project--support"
        style={{
          backgroundImage: 'url(https://image.ibb.co/kfJc4T/support_banner.png)'
        }}
      >
        <h3 className="typical--h3">SUPPORT</h3>
        <p className="typical--p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <CostCalculator />
      <CommonForm />
    </section>
  );
};

export default StartProject;
