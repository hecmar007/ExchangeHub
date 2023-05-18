import './App.css';
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { TextField, Typography, Grid, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontFamily: 'Montserrat',
      fontSize: '2rem',
      fontWeight: 700,
    },
  },
  palette: {
    main: {
      secondary: '#00416A', // Replace 'red' with your desired color
    },
  },
});

function App() {

  const navigate = useNavigate();
  //const location = useLocation();
  const [searchValue, setSearchValue] = useState('');


  const products = [
    {
      id: 1,
      name: "Jaqueta esqui",
      imageUrl: "/jaqueta300.jpeg",
    },
    {
      id: 2,
      name: "Diccionari grec",
      imageUrl: "/diccionari300.jpeg",
    },
    {
      id: 3,
      name: "Bicicleta",
      imageUrl: "/bicicleta300.jpg",
    },
    {
      id: 4,
      name: "Placeholder",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Placeholder",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      name: "Placeholder",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      name: "Placeholder",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 8,
      name: "Placeholder",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 9,
      name: "Placeholder",
      imageUrl: "https://via.placeholder.com/300",
    }
  ];

  const handleProductClick = (productId) => {
    if (productId < 4)
      navigate('/Product' + productId)
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/SearchPage?query=${encodeURIComponent(searchValue)}`);
    }
  };

  const handleUpload = () => {
    navigate('/PujarArticle')
  };


  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
export default App;
