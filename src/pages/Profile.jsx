import React from 'react';
import Header from '../components/Header';

function Profile(props) {
  return (
    <div>
      <Header
        headerType={ { title: 'Profile', profileIcon: true, searcIcon: false } }
        { ...props }
      />
    </div>
  );
}

export default Profile;