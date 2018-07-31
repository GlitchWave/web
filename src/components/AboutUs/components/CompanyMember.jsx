require('./CompanyMember.scss');
import React from 'react';

const CompanyMember = props => {
  const dataToRender = {
    imageURL: typeof props.url === 'string' ? props.url : '#',
    memberName:
      typeof props.name === 'string' ? props.name : 'Need to load name)',
    memberPosition:
      typeof props.position === 'string' ? props.position : 'Developer, maybe)'
  };
  return (
    <div className="CompanyMember">
      <div className="CompanyMemberPortrait">
        {/*<img src={dataToRender.imageURL}/>*/}
      </div>
      <p>{dataToRender.memberName}</p>
      <p>{dataToRender.memberPosition}</p>
    </div>
  );
};

export default CompanyMember;
