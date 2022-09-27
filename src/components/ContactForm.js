// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Avatar, Button, Card, List, ListItem, ListItemAvatar, TextField } from "@mui/material";
import { Box, Grid } from '@mui/material';
import { useState } from "react";

const ContactForm = ({addHandler}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [newContact, setNewContact] = useState({});

    return (
        <div className="contact-form">
            <Card>
                <List sx={{ width: 1 }}>
                    <ListItem>
                        <TextField 
                        required 
                        label="Name"
                        value={newContact.name} 
                        variant="standard"
                        onChange={(e) => {
                            setNewContact({...newContact, name: e.target.value})
                        }} />
                    </ListItem>
                    <ListItem>
                        <TextField 
                        required 
                        label="Phone" 
                        value={newContact.phone} 
                        variant="standard" 
                        onChange={(e) => {
                            setNewContact({...newContact, phone: e.target.value})
                        }}
                        />
                    </ListItem>
                    <ListItem>
                        <TextField 
                        required 
                        label="Email" 
                        value={newContact.email} 
                        variant="standard"
                        onChange={(e) => {
                            setNewContact({...newContact, email: e.target.value})
                        }}
                        />
                    </ListItem>
                    <ListItem>
                        <TextField 
                        required 
                        label="Photo URL" 
                        value={newContact.photo} 
                        variant="standard"
                        onChange={(e) => {
                            setNewContact({...newContact, photo: e.target.value})
                        }}
                        />
                    </ListItem>
                    <ListItem>
                        <Button
                        onClick={() => addHandler(newContact)}
                        >Add New</Button>
                    </ListItem>
                </List>
            </Card>
            
        </div>
    );
}

export default ContactForm;