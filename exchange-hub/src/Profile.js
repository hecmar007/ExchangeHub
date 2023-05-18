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
  Button,
} from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

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
      name: 'Product 1',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Product 2',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Product 3',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      name: 'Product 4',
      imageUrl: 'https://via.placeholder.com/300',
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
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget leo pellentesque, gravida risus ut, rutrum est. Nunc quis odio id metus ultrices tincidunt. Nulla vel lobortis mauris, vitae faucibus nulla.');

  // Handle form input change
  const handleInputChange = (event) => {
    setUserReview({
      ...userReview,
      [event.target.name]: event.target.value,
    });
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
    navigate('/Product')
  };

  const handleUserClick = (name) => {
    const query = '?name='+name;
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

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* Description box */}
            <div style={{ flex: 2, padding: '15px' }}>
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
            <div style={{ flex: 1, padding: '15px' }}>
              <Typography variant="h5">Rating</Typography>
              <Rating value={overallRating} readOnly />
            </div>

            {/* Other user's reviews */}
            <div style={{ flex: 2, padding: '15px' }}>
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
          </div>
          {!queryParams.personal ? (
            <>
              <Box sx={{ marginTop: '2rem' }}>
                <Typography variant="h5">Leave a Review</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    name="user"
                    label="Your Name"
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
                    label="Comment"
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
              </Box>
            </>
          ) : null}

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
        </Box>
      </div>
    </>
  );
};

export default ProfilePage;
