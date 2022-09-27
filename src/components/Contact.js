// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Card, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<div>
        <Card>
            <List sx={{ width: 1 }}>
                {data.map((contact, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar src={contact.photo}/>
                        </ListItemAvatar>
                        <List>
                            <ListItemText primary={contact.name}/>
                            <ListItemText primary={contact.phone}/>
                            <ListItemText primary={contact.email}/>
                        </List>
                    </ListItem>
                );
                })} 
            </List>
        </Card> 
    </div>);
};

export default Contact;
