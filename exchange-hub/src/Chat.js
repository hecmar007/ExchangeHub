import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper, Typography, MenuList, MenuItem, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const navigate = useNavigate();

    useEffect(() => {
        if (queryParams.newName !== undefined) handleSelectItem("" + queryParams.newName);
    }, []);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') {
            return;
        }

        const userMessage = newMessage.trim();
        const updatedMessages = [...messages, userMessage, 'Hola! ']; // Add automatic reply
        setMessages(updatedMessages);
        setNewMessage('');
    };

    const handleSelectItem = (menuItemName) => {
        setSelectedMenuItem(menuItemName);
        setMessages([]);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && selectedMenuItem !== '') {
            event.preventDefault();
            handleSendMessage();
        }
    };

    const handleNavigateUser = () => {
        const query = '?name=' + selectedMenuItem;
        navigate(`/Perfil${query}`);
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ResponsiveAppBar />
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Xats
                </Typography>
                <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', justifyContent: 'center', margin: '15px', gap: '10px', height: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <Paper style={{ padding: '10px' }}>
                            {queryParams.newName === undefined ? (
                                <MenuList>
                                    <MenuItem
                                        onClick={() => handleSelectItem('Martí')}
                                        style={{
                                            padding: '10px 16px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            backgroundColor: selectedMenuItem === 'Martí' ? '#f1f1f1' : 'inherit',
                                            '&:hover': {
                                                backgroundColor: '#f1f1f1',
                                            },
                                        }}
                                    >
                                        <Avatar alt="Martí" src={`/profile-pictures/Martí.jpg`}>
                                            <AccountCircle />
                                        </Avatar>
                                        <Typography style={{ marginLeft: '10px' }}>Martí</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => handleSelectItem('Joel')}
                                        style={{
                                            padding: '10px 16px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            backgroundColor: selectedMenuItem === 'Joel' ? '#f1f1f1' : 'inherit',
                                            '&:hover': {
                                                backgroundColor: '#f1f1f1',
                                            },
                                        }}
                                    >
                                        <Avatar alt="Joel" src={`/profile-pictures/Joel.jpg`}>
                                            <AccountCircle />
                                        </Avatar>
                                        <Typography style={{ marginLeft: '10px' }}>Joel</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => handleSelectItem('Héctor')}
                                        style={{
                                            padding: '10px 16px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            backgroundColor: selectedMenuItem === 'Héctor' ? '#f1f1f1' : 'inherit',
                                            '&:hover': {
                                                backgroundColor: '#f1f1f1',
                                            },
                                        }}
                                    >
                                        <Avatar alt="Héctor" src={`/profile-pictures/Héctor.jpg`}>
                                            <AccountCircle />
                                        </Avatar>
                                        <Typography style={{ marginLeft: '10px' }}>Héctor</Typography>
                                    </MenuItem>
                                </MenuList>
                            ) : (
                                <MenuList>
                                    <MenuItem
                                        onClick={() => handleSelectItem('Martí')}
                                        style={{
                                            padding: '10px 16px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            backgroundColor: selectedMenuItem === 'Martí' ? '#f1f1f1' : 'inherit',
                                            '&:hover': {
                                                backgroundColor: '#f1f1f1',
                                            },
                                        }}
                                    >
                                        <Avatar alt="Martí" src={`/profile-pictures/Martí.jpg`}>
                                            <AccountCircle />
                                        </Avatar>
                                        <Typography style={{ marginLeft: '10px' }}>Martí</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => handleSelectItem('Joel')}
                                        style={{
                                            padding: '10px 16px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            backgroundColor: selectedMenuItem === 'Joel' ? '#f1f1f1' : 'inherit',
                                            '&:hover': {
                                                backgroundColor: '#f1f1f1',
                                            },
                                        }}
                                    >
                                        <Avatar alt="Joel" src={`/profile-pictures/Joel.jpg`}>
                                            <AccountCircle />
                                        </Avatar>
                                        <Typography style={{ marginLeft: '10px' }}>Joel</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => handleSelectItem('Héctor')}
                                        style={{
                                            padding: '10px 16px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            backgroundColor: selectedMenuItem === 'Héctor' ? '#f1f1f1' : 'inherit',
                                            '&:hover': {
                                                backgroundColor: '#f1f1f1',
                                            },
                                        }}
                                    >
                                        <Avatar alt="Héctor" src={`/profile-pictures/Héctor.jpg`}>
                                            <AccountCircle />
                                        </Avatar>
                                        <Typography style={{ marginLeft: '10px' }}>Héctor</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => handleSelectItem('' + queryParams.newName)}
                                        style={{
                                            padding: '10px 16px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            backgroundColor: selectedMenuItem === queryParams.newName ? '#f1f1f1' : 'inherit',
                                            '&:hover': {
                                                backgroundColor: '#f1f1f1',
                                            },
                                        }}
                                    >
                                        <Avatar alt={queryParams.newName} src={`/profile-pictures/Josep Parafita.jpg`}>
                                            <AccountCircle />
                                        </Avatar>
                                        <Typography style={{ marginLeft: '10px' }}>{queryParams.newName}</Typography>
                                    </MenuItem>
                                </MenuList>
                            )}
                        </Paper>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {selectedMenuItem !== '' ? (
                            <>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt={selectedMenuItem} src={`/profile-pictures/${selectedMenuItem}.jpg`}>
                                        <AccountCircle />
                                    </Avatar>
                                    <Typography variant="h5" style={{ marginLeft: '10px' }}>
                                        {selectedMenuItem}
                                    </Typography>
                                </div>
                                <Button style={{ paddingTop: '5px' }} color='secondary' onClick={handleNavigateUser}>Accedir perfil</Button>
                            </>
                        ) : (
                            <Typography variant="h5" style={{ alignSelf: 'flex-start', marginTop: 0, alignSelf: 'center' }}>
                                Sel·lecciona un xat per començar
                            </Typography>
                        )}
                        <Box
                            mt={2}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                overflowY: 'auto', // Add scrollability
                            }}
                        >
                            {messages.map((message, index) => (
                                <Paper
                                    elevation={2}
                                    style={{
                                        marginBottom: '5px',
                                        backgroundColor: message === 'Hola! ' ? '#dcedc8' : '#dcf8c6',
                                        marginLeft: message === 'Hola! ' ? 'auto' : '10px',
                                        marginRight: message === 'Hola! ' ? '10px' : 'auto',
                                    }}
                                    key={index}
                                >
                                    <Typography m={1} variant="body1">
                                        {message}
                                    </Typography>
                                    <Typography variant="caption" align={message === 'Hola! ' ? 'right' : 'left'} style={{paddingLeft:"5px"}}>
                                        {new Date().toLocaleTimeString(['es-ES'], { hour: '2-digit', minute: '2-digit' })}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                        <Box mt={2} style={{ display: 'flex', justifySelf: 'end', gap: '10px' }}>
                            <TextField
                                fullWidth
                                label="Missatge"
                                variant="outlined"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                color="secondary"
                            />
                            <Button variant="contained" color="secondary" onClick={handleSendMessage} disabled={selectedMenuItem === ''}>
                                Enviar
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
