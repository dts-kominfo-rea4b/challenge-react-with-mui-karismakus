// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Divider } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div className='contact-title'>
      <h1>Call a Friend</h1>
      <Divider><h4>Your friendly contact app</h4></Divider>
    </div>
  );
};

export default Header;
