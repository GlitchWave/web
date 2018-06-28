import React from 'react';
import CompanyMember from '../components/CompanyMember';

const createMembers = (membersArray) => {
    return membersArray.map(member => {
        return <CompanyMember url={member.url}
                              name={member.name}
                              position={member.position}
                              key={Math.floor(Math.random()*1000)}
         />
    })
}

export default createMembers;