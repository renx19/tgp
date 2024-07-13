import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MembersData } from '../utils/MembersData'; // Assuming this imports your JSON data
import QRCode from 'qrcode.react';
import "../styles/members.css"

const MemberDetailsComponent = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberDetails = () => {
      setLoading(true);
      setTimeout(() => {
        const foundMember = MembersData.find(member => member.id === parseInt(id));
        if (foundMember) {
          setMember(foundMember);
          setLoading(false);
        } else {
          setError(`Member with ID ${id} not found`);
          setLoading(false);
        }a
      }, 1000); // Simulating delay of 1 second
    };

    fetchMemberDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!member) {
    return <div>No member found for ID {id}</div>;
  }

  // Determine background color based on status
  let statusColor;
  switch (member.status) {
    case 'Active':
      statusColor = 'lightgreen'; // Light green background for active
      break;
    case 'suspended':
      statusColor = 'lightyellow'; // Light yellow background for suspended
      break;
    case 'Expelled':
      statusColor = 'salmon'; // Salmon background for expelled
      break;
    case 'inactive':
      statusColor = '#d2b48c'; // Brown background for inactive
      break;
    default:
      statusColor = 'white'; // Default background color
  }

  return (
    <div className='members-wrapper' >
      <h2>{member.name}</h2>
      <table className="member-details-table">
        <tbody className='id-table'>
          <tr>
            <td className="id-td">ID:</td>
            <td className="id-td">{member.id}</td>
          </tr>
          <tr>
            <td className="id-td">Batch Name:</td>
            <td className="id-td">{member.batchName}</td>
          </tr>
          <tr>
            <td className="id-td">Date of IR:</td>
            <td className="id-td">{member.dateofIR}</td>
          </tr>
          <tr>
            <td className="id-td">Alexis Name:</td>
            <td className="id-td">{member.alexisName}</td>
          </tr>
          <tr>
            <td className="id-td">Sponsor Name:</td>
            <td className="id-td">{member.sponsorName}</td>
          </tr>
          <tr>
            <td className="id-td">GTGLT:</td>
            <td className="id-td">{member.GTGLT}</td>
          </tr>
          <tr>
            <td className="id-td">MWW:</td>
            <td className="id-td">{member.MWW}</td>
          </tr>
          <tr>
            <td className="id-td">Alma Mater:</td>
            <td className="id-td">{member.almaMater}</td>
          </tr>
          <tr>
            <td className="id-td">Birthday:</td>
            <td className="id-td">{member.birthday}</td>
          </tr>
          <tr style={{ backgroundColor: statusColor }}>
            <td className="id-td">Status:</td>
            <td className ="id-td">{member.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemberDetailsComponent;
