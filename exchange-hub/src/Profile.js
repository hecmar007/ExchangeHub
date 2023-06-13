import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button
} from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  // Sample data for other user's reviews
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: 'Marc',
      rating: 4,
      comment: 'Persona de tracte molt agradable',
    },
    {
      id: 2,
      user: 'Joana',
      rating: 5,
      comment: 'Tot correcte, molt recomanat',
    },
  ]);

  // Sample data for user's products
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
  ];

  // Calculate the overall user rating
  const overallRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Form state
  const [userReview, setUserReview] = useState({
    user: '',
    rating: 0,
    comment: '',
  });

  // Description state
  const [description, setDescription] = useState("Hola! El meu nom és Josep. Soc un pare biòleg amant de la naturalesa. Visc a Barcelona però sempre que puc m'escapo amb la meva família als Pirineus i faig tot tipus d'activitat. M'interessa tot tipus d'equipament relacionat amb activitats a la muntanya.");

  // Handle form input change
  const handleInputChange = (event) => {
    setUserReview({
      ...userReview,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpload = () => {
    navigate('/PujarArticle')
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      ...userReview,
      id: reviews.length + 1,
    };
    setReviews([...reviews, newReview]);
    setUserReview({
      user: '',
      rating: 0,
      comment: '',
    });
  };

  const handleProductClick = (productId) => {
    navigate(`/Product${productId}`)
  };

  const handleUserClick = (name) => {
    const query = '?name=' + name;
    navigate(`/Perfil${query}`)
  }

  // Handle description change
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <ResponsiveAppBar />
      </div>
      <div>
        <Box sx={{ padding: '1rem' }}>
          {/* Profile header */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src="/path/to/avatar.jpg"
              sx={{ width: 100, height: 100, marginRight: '1rem' }}
            />
            <Typography variant="h4">{queryParams.name}</Typography>
          </Box>
          <Divider sx={{ margin: '1rem 0' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Description box */}
            <div>
              <Typography variant="h5">Descripció</Typography>
              {queryParams.personal ? (
                <TextField
                  value={description}
                  onChange={handleDescriptionChange}
                  multiline
                  fullWidth
                />
              ) : (
                <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                  {description}
                </Typography>
              )}
            </div>

            {/* Overall user rating */}
            <div>
              <Typography variant="h5">Rating</Typography>
              <Rating value={overallRating} readOnly />
            </div>

            {/* Other user's reviews */}
            <div>
              <Typography variant="h5">Reviews d'altres usuaris</Typography>
              <List>
                {reviews.map((review) => (
                  <ListItem key={review.id} onClick={() => handleUserClick(review.user)}>
                    <ListItemAvatar>
                      <Avatar>{review.user.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={review.user}
                      secondary={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Rating value={review.rating} readOnly />
                          <Typography variant="body2" sx={{ marginLeft: '0.5rem' }}>
                            {review.comment}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </div>

            {!queryParams.personal && (
              <div>
                <Typography variant="h5">Deixa una ressenya</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    name="user"
                    label="El teu nom"
                    value={userReview.user}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                    fullWidth
                  />
                  <Rating
                    name="rating"
                    value={userReview.rating}
                    onChange={(event, newValue) =>
                      setUserReview({ ...userReview, rating: newValue })
                    }
                  />
                  <TextField
                    name="comment"
                    label="Comentari"
                    value={userReview.comment}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={4}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={userReview.comment === '' || userReview.user === ''}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            )}

            {queryParams.personal && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="outlined" size="large" color="secondary" aria-label="Pujar producte" onClick={handleUpload}>
                  <AddCircleIcon sx={{ mr: 1 }} />
                  Pujar producte
                </Button>
              </div>
            )}

            {/* User's products gallery */}
            <Typography variant="h5" sx={{ marginTop: '2rem' }}>
              Productes penjats
            </Typography>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                >
                  <Card>
                    <CardMedia component="img" image={product.imageUrl} alt={product.name} />
                    <CardContent>
                      <Typography variant="subtitle1">{product.name}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </div>
    </>
  );
};

export default ProfilePage;
