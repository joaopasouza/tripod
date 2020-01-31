import React, { useState, useEffect } from 'react';
import { getIpAddress } from '../../services/ipService';

function Footer() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const [res, err] = await getIpAddress();
      if (res) {
        setIpAddress(res.ip);
      } else {
        console.log(err);
        setIpAddress('Error');
      }
    };

    fetch();
  });

  return (
    <footer className="main-footer">
      <span>{`IP: ${ipAddress}`}</span>
    </footer>
  );
}

export default Footer;
