import React from 'react';
import { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { TextField, Typography, Grid, Button } from '@mui/material';
import UserCard from './UserCard';

export default function SearchPage() {

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
                        <div style={{ marginTop: "15px" }}>
                            <UserCard name="Josep Parafita"
                                profilePicture="https://example.com/profile.jpg"
                                rating={4} />
                        </div>
                    </div>
                    <div style={{ width: "50%", margin: "15px", alignSelf: "flex-start" }}>
                        <Typography style={{ marginTop: "15px" }} variant="body1">Descripció del producte. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>

                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'sticky', bottom: 0, zIndex: 101 }}>
                <Button variant="contained" style={{ background: "black" }}>M'INTERESSA</Button>
            </div>
        </>
    );
}