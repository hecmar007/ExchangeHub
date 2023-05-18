import './App.css';
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { TextField, Typography, Grid, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function App() {

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');


  const products = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: "Placeholder",
    imageUrl: "https://via.placeholder.com/300",
  }));

  const handleProductClick = (productId) => {
    navigate('/Product')
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate('/SearchPage');
    }
  };

  const handleUpload = () => {
    navigate('/PujarArticle')
};


  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <ResponsiveAppBar />
      </div>

      <div style={{ paddingTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h3"> ExchangeHub</Typography>
        <TextField id="outlined-basic" label="Search" variant='outlined' style={{ width: '50%', marginTop: '15px', marginBottom: '15px' }}
          onKeyPress={handleKeyPress}
          onChange={(event) => setSearchValue(event.target.value)} />
        <Typography variant="h4"> Suggeriments personalitzats </Typography>
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

        <div style={{ position: 'sticky', bottom: 20, zIndex: 101 }}>
          <Fab variant="extended" size="big" color="secondary" aria-label="Pujar producte" onClick={handleUpload}>
            <AddCircleIcon sx={{ mr: 1 }} />
            Pujar producte
          </Fab>
        </div>
      </div>
    </>
  );
}
export default App;
