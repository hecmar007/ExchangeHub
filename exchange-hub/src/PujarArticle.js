import { Typography, TextField, Button, Fab, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import PhotoUploader from './PhotoUploader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterBar from './FilterBar';
import { useNavigate } from 'react-router-dom';

export default function PujarArticle() {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('');
    const [images, setImages] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [isProductUploaded, setIsProductUploaded] = useState(false); // New state variable
    const navigate = useNavigate();

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleUpload = () => {
        setIsProductUploaded(true);
    };

    const handleHome = () => {
        navigate('/')
    }

    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <ResponsiveAppBar />
            </div>
            {isProductUploaded ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", height:"100vh" }}>
                    <Typography variant="h5">PRODUCTE PUJAT CORRECTAMENT!</Typography>
                    <div style={{marginTop:"15px"}}>
                        <Button variant="contained" style={{ background: "black" }} onClick={handleHome}>TORNAR A l'INICI</Button>
                    </div>
                </div>
            ) : (
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', minHeight: '100vh' }}>
                        <Typography variant='h3'>Pujar Producte</Typography>
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
                                </Select>
                            </FormControl>
                            <FilterBar />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <PhotoUploader images={images} setImages={setImages} />
                        </div>
                        {isEditing ? (
                            <>
                                <TextField
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    style={{ marginBottom: '10px', width: '80%', borderColor: 'black' }}
                                    color="secondary"
                                />
                                <Button onClick={handleSave} variant="contained" style={{ background: "black" }}>
                                    Guardar descripció
                                </Button>
                            </>
                        ) : (
                            <>
                                <Typography variant='body1'>{text}</Typography>
                                <Button onClick={handleEdit} variant="outlined" style={{ color: "black", borderColor: 'black' }}>
                                    Afegir o editar descripció
                                </Button>
                            </>
                        )}
                        <div style={{ flex: 1 }}></div>
                    </div>
                    <div style={{ position: 'sticky', bottom: 20, zIndex: 101, display: "flex", justifyContent: "flex-end", paddingRight: "60px" }}>
                        <Fab variant="extended" size="big" color="secondary" aria-label="Pujar" disabled={images === [] || text === ''} onClick={handleUpload}>
                            <AddCircleIcon sx={{ mr: 1 }} />
                            Pujar
                        </Fab>
                    </div>
                </div>
            )}
        </>
    );
}
