import React from 'react';

const Cards = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '300px', height: '300px', backgroundColor: '#F5DEB3' }}>
        <h2>Single User</h2>
        <button>Login</button>
      </div>
      <div style={{ width: '300px', height: '300px', backgroundColor: '#F5DEB3' }}>
        <h2>Investor</h2>
        <button className='col-start-auto'>Login</button>
      </div>
      <div style={{ width: '300px', height: '300px', backgroundColor: '#F5DEB3' }}>
        <h2>Startup</h2>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Cards;

