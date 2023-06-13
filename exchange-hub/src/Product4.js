import React from 'react';
import { useState, useEffect } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { TextField, Typography, Grid, Button, Chip } from '@mui/material';
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("Josep Parafita");

    const [images, setImages] = useState([
        {
            original: '/servei1.jpg',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: '/servei2.jpg',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
    ]);

    const [tags, setTags] = useState(["Servei", "Disseny", "Logotip", "Empresa"]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleProfileClick = () => {
        const query = '?name=' + userName;
        navigate(`/Perfil${query}`);
    };

    const handleInterestClick = () => {
        const query = '?newName=' + userName;
        navigate(`/Chat${query}`);
    };

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <ResponsiveAppBar />
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", marginTop: '10px' }}>
                <Typography variant="h2">Dissenyo logotips</Typography>
                <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', alignItems: "center" }}>
                    <div style={{ width: "100%", margin: "15px" }}>
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
                        <div style={{ marginTop: "15px", maxWidth: "250px" }} onClick={handleProfileClick}>
                            <UserCard
                                name={userName}
                                profilePicture="https://example.com/profile.jpg"
                                rating={4}
                            />
                        </div>
                    </div>
                    <div style={{ width: "100%", margin: "15px", alignSelf: "flex-start" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant='substitle2' style={{ paddingRight: "15px" }}>Etiquetes: </Typography>
                            {tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    color="secondary"
                                    style={{ marginRight: "5px" }}
                                />
                            ))}
                        </div>
                        <Typography style={{ marginTop: "15px", marginRight: "35px" }} variant="subtitle1">Dissenyador de logotips amb 4 anys d'experiència, graduat de disseny gràfic per la Universitat de Lleida. Interessat en bescanviar per material camping. En general, dono dret a tres revisions, tot i que és negociable. Podeu demanar-me més exemples.</Typography>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'sticky', bottom: 10, zIndex: 101 }}>
                <Button variant="contained" style={{ background: "black" }} onClick={handleInterestClick}>M'INTERESSA</Button>
            </div>
        </>
    );
}
