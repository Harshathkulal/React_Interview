import React, { useState } from 'react';

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState('white');

  const handleChangeColor = () => {
    const colors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#9c27b0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={handleChangeColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background Color
      </button>
    </div>
  );
};

export default BackgroundChanger;

