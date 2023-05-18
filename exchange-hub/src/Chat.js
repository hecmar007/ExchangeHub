import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper, Typography, MenuList, MenuItem } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const navigate = useNavigate()

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
        navigate(`/Perfil${query}`)
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ResponsiveAppBar />
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Xat
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '15px', gap: '10px', height: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <Paper style={{ background: '#ededed' }}>
                            {queryParams.newName === undefined ? (
                                <MenuList>
                                    <MenuItem onClick={() => handleSelectItem('Martí')}>Martí</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('Joel')}>Joel</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('Héctor')}>Héctor</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('Mireia')}>Mireia</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('Jordi')}>Jordi</MenuItem>
                                </MenuList>
                            ) : (
                                <MenuList>
                                    <MenuItem onClick={() => handleSelectItem('Martí')}>Martí</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('Joel')}>Joel</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('Héctor')}>Héctor</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('Mireia')}>Mireia</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('Jordi')}>Jordi</MenuItem>
                                    <MenuItem onClick={() => handleSelectItem('' + queryParams.newName)}>{queryParams.newName}</MenuItem>
                                </MenuList>
                            )}
                        </Paper>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {selectedMenuItem !== "" ? (
                            <>
                                <Typography variant="h5" style={{ alignSelf: 'flex-start', marginTop: 0, alignSelf: 'center' }}>
                                    Xat amb {selectedMenuItem}
                                </Typography>
                                <Button style={{ paddingTop: "5px" }} color='secondary' onClick={handleNavigateUser}>Accedir al perfil</Button>
                            </>
                        ) : (
                            <Typography variant="h5" style={{ alignSelf: 'flex-start', marginTop: 0, alignSelf: 'center' }}>
                                Sel·leciona un xat per començar
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
                                        backgroundColor: message === 'Hola! ' ? '#dcedc8' : 'inherit',
                                    }}
                                    key={index}
                                >
                                    <Typography m={1} variant="body1">
                                        {message}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                        <Box mt={2} style={{ display: 'flex', justifySelf: 'end', gap: '10px' }}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                color="secondary"
                            />
                            <Button variant="contained" color="secondary" onClick={handleSendMessage} disabled={selectedMenuItem === ''}>
                                Send
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
