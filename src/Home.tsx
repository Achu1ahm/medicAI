import React from 'react';

function Home() {

    const appStyle: React.CSSProperties = {
        textAlign: 'center',  
        padding: '20px',       
      };

  return (
    <div style={appStyle}>
      <h2>Welcome to the Home Page</h2>
      <li><a href="/about">About</a></li>
    </div>
  );
}

export default Home;
