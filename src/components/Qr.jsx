import React from 'react';
import QRCode from 'qrcode.react';
import { MembersData } from '../utils/MembersData'; // Assuming this imports your JSON data

const MembersList = () => {
  return (
    <div className="qr-con">
      <div className="qr">
        {MembersData.map((member) => (
          <div key={member.id} className="qr-item">
            <p>{member.name}</p>
            <div>
              <QRCode value={member.qrData.link} size={128} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersList;
