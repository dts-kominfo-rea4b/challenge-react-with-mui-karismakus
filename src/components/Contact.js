// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Card, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <div>
        <ListItem>
            <ListItemAvatar>
                <Avatar src={data.photo}/>
            </ListItemAvatar>
            <List>
                <ListItemText primary={data.name}/>
                <ListItemText primary={data.phone}/>
                <ListItemText primary={data.email}/>
            </List>
        </ListItem>
    </div>);
};

export default Contact;
