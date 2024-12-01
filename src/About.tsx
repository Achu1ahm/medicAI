import React from 'react';

function About() {

  const appStyle: React.CSSProperties = {
    textAlign: 'center',  
    padding: '20px',       
  };

  return (
    <div style={appStyle}>
      <h2>About Us</h2>
      <li><a href="/">home</a></li>
    </div>
  );
}

export default About;
