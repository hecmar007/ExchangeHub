import { TextField, Typography, Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useState } from 'react';
import FilterBar from './FilterBar';

export default function SearchPage() {

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('Ambdos');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ paddingTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TextField id="outlined-basic" label="Search" variant='outlined' style={{ width: '50%', marginTop: '15px', marginBottom: '15px' }}
          onKeyPress={handleKeyPress}
          onChange={(event) => setSearchValue(event.target.value)} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width:"90%" }}>
          <FormControl style={{width:"130px"}}>
            <InputLabel>Tipus de producte</InputLabel>
            <Select
              value={selectedOption}
              onChange={handleChange}
              label="Tipus de producte"
            >
              <MenuItem value="Article">Article</MenuItem>
              <MenuItem value="Servei">Servei</MenuItem>
              <MenuItem value="Ambdos">Ambdos</MenuItem>
            </Select>
          </FormControl>
          <FilterBar />
        </div>
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