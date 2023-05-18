import React from 'react';
import { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { TextField, Typography, Grid, Button, Chip } from '@mui/material';
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {

    const navigate = useNavigate()
    const [userName, setUserName] = useState("Josep Parafita")

    const [images, setImages] = useState([{
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },])

    const [tags, setTags] = useState(["Esquí", "Esport"])

    const handleProfileClick = () => {
        const query = '?name=' + userName;
        navigate(`/Perfil${query}`)
    }

    const handleInterestClick = () => {
        const query = '?newName=' + userName;
        navigate(`/Chat${query}`)
    }

    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <ResponsiveAppBar />
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", marginTop: '10px' }}>
                <Typography variant="h2">Product name</Typography>
                <div style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                    <div style={{ width: "50%", margin: "15px" }}>
                        <ImageGallery
                            showThumbnails={false}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showNav={true}
                            autoPlay={false}
                            infinite={false}
                            items={images}
                            style={{
                                height: '100%',
                            }}
                        />
                        <div style={{ marginTop: "15px" }} onClick={handleProfileClick}>
                            <UserCard name={userName}
                                profilePicture="https://example.com/profile.jpg"
                                rating={4} />
                        </div>
                    </div>
                    <div style={{ width: "50%", margin: "15px", alignSelf: "flex-start" }}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <Typography variant='substitle2' style={{paddingRight: "15px"}}>Etiquetes: </Typography>
                            {tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    color="secondary"
                                    style={{ marginRight: "5px" }}
                                />
                            ))}
                        </div>
                        <Typography style={{ marginTop: "15px" }} variant="body1">Descripció del producte. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'sticky', bottom: 10, zIndex: 101 }}>
                <Button variant="contained" style={{ background: "black" }} onClick={handleInterestClick}>M'INTERESSA</Button>
            </div>
        </>
    );
}