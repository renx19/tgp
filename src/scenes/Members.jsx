import React from 'react'
import "../styles/members.css"
import { MembersData } from '../utils/MembersData';

function Members() {

  return (
    <div className='body-container'>

 <div className="table-wrapper">
    <h1 className='mem-h1'>Tayhi Chapter Members</h1>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Batch Name</th>
          <th>Date of IR</th>
          <th>Alexis Name</th>
          <th>Sponsor Name</th>
          <th>GTGLT</th>
          <th>MWW</th>
          <th>Alma Mater</th>
          <th>Birthday</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {MembersData.map(member => (
          <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.batchName}</td>
            <td>{member.dateofIR}</td>
            <td>{member.alexisName}</td>
            <td>{member.sponsorName}</td>
            <td>{member.GTGLT}</td>
            <td>{member.MWW}</td>
            <td>{member.almaMater}</td>
            <td>{member.birthday}</td>
            <td>{member.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
);
}

export default Members
