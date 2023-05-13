import './App.css';
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { TextField, Typography, Grid } from '@mui/material';


function App() {


  const products = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: "Placeholder",
    imageUrl: "https://via.placeholder.com/300",
  }));

  const handleProductClick = (productId) => {
    console.log(`Clicked product with ID: ${productId}`);
    // Add your logic here to handle the click event
  };


  return (
    <>
      <ResponsiveAppBar />
      <div style={{ paddingTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h3"> ExchangeHub</Typography>
        <TextField id="outlined-basic" label="Search" variant='outlined' style={{ width: '50%', paddingTop: '15px' }} />

        <Grid container spacing={2} style={{ paddingTop: '30px' }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id} >
              <div onClick={() => handleProductClick(product.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={product.imageUrl} alt="Product" style={{ width: '80%', height: 'auto' }} />
                <Typography variant='h6' style={{ textAlign: 'center', paddingTop: '10px' }}>{product.name}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>

      </div>
    </>
  );
}
export default App;
