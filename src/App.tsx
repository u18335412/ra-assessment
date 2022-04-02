import React from 'react';
import { Box } from './components/Box';

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#fafafa',
};

const boxStyles: React.CSSProperties = {
  width: '100px',
  height: '100px',
  backgroundColor: '#f00',
};

export const App = () => {
  return (
    <div style={containerStyles}>
      <Box style={boxStyles}></Box>
    </div>
  );
};
