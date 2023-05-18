import { TextField, Typography, Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useState, useEffect } from 'react';
import FilterBar from './FilterBar';
import queryString from 'query-string';

export default function SearchPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('Ambdos');
  const [refresh, setRefresh] = useState(false)

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [initialProducts, setInitialProducts] = useState(Array.from({ length: 5 }, (_, index) => ({
    id: index + 2,
    name: "Placeholder",
    imageUrl: "https://via.placeholder.com/300",
  })))

  const [products, setProducts] = useState(Array.from({ length: 5 }, (_, index) => ({
    id: index + 2,
    name: "Placeholder",
    imageUrl: "https://via.placeholder.com/300",
  })))

  const handleProductClick = (productId) => {
    if (productId === "Jaqueta esqui")
      navigate('/Product1')
    else if (productId === "Diccionari grec")
      navigate('/Product2')
    else if (productId === "Bicicleta")
      navigate('/Product3')
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/SearchPage?query=${encodeURIComponent(searchValue)}`);
      setRefresh(!refresh)
    }
  };

  useEffect(() => {
    console.log(queryParams.query.toLowerCase())
    if (queryParams.query.toLowerCase() === "jaqueta" || queryParams.query.toLowerCase() === "jaqueta esqui") {
      console.log(products)
      const updatedProducts = [
        {
          id: 1,
          name: "Jaqueta esqui",
          imageUrl: "/jaqueta300.jpeg",
        },
        ...initialProducts
      ];
      setProducts(updatedProducts);
    } else if (queryParams.query.toLowerCase() === "diccionari" || queryParams.query.toLowerCase() === "diccionari grec") {
      const updatedProducts = [
        {
          id: 1,
          name: "Diccionari grec",
          imageUrl: "/diccionari300.jpeg",
        },
        ...initialProducts
      ];
      setProducts(updatedProducts);
    } else if (queryParams.query.toLowerCase() === "bicicleta") {
      const updatedProducts = [
        {
          id: 1,
          name: "Bicicleta",
          imageUrl: "/bicicleta300.jpg",
        },
        ...initialProducts
      ];
      setProducts(updatedProducts);
    }
    else {
      const updatedProducts = [
        {
          id: 0,
          name: "Placeholder",
          imageUrl: "https://via.placeholder.com/300",
        },
        ...initialProducts
      ];
      setProducts(updatedProducts);
    }
  }, [refresh]);

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ paddingTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TextField id="outlined-basic" label="Search" variant='outlined' style={{ width: '50%', marginTop: '15px', marginBottom: '15px' }}
          onKeyPress={handleKeyPress}
          onChange={(event) => setSearchValue(event.target.value)} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
          <FormControl style={{ width: "130px" }}>
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
              <div onClick={() => handleProductClick(product.name)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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