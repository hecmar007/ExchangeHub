import React from 'react';
import { Typography, Avatar, Box, Rating } from '@mui/material';

function UserCard({ name, profilePicture, rating }) {
  return (
    <Box display="flex" alignItems="center">
      <Avatar src={profilePicture} alt={name} />
      <Box ml={2}>
        <Typography variant="subtitle1">{name}</Typography>
        <Rating value={rating} readOnly />
      </Box>
    </Box>
  );
}

export default UserCard;