import './App.css';
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { TextField } from '@mui/material';


function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{paddingTop: "20px", display: "flex", justifyContent: "center"}}>
        <TextField id="outlined-basic" label="Search" variant='outlined' />
      </div>
    </>
  );
}
export default App;
