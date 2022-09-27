import './App.css';
import { Avatar, Button, Card, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { Box, Grid } from '@mui/material';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { useState } from 'react';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const addHandler = (newContact) => {
    // console.log(contacts);
    setContacts([...contacts, {name: newContact.name, phone: newContact.phone, email: newContact.email, photo:newContact.photo}])
  }

  return (
    <div className="App">
      <Header/>
        <Box sx={{ flexGrow:1, margin:3}}>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6}>
                    <ContactForm addHandler={addHandler}/>
                </Grid>

                <Grid item lg={6} md={6}>
                    <Card>
                        <List sx={{ width: 1 }}>
                          {contacts.map((contact) => {
                            return (
                              <ListItem>
                                  <ListItemAvatar>
                                      <Avatar src={contact.photo}/>
                                  </ListItemAvatar>
                                  <List>
                                      <ListItemText primary={contact.name} secondary={contact.phone}/>
                                      <ListItemText secondary={contact.email}/>
                                  </List>
                              </ListItem>
                            );
                          })} 
                        </List>
                    </Card> 
                </Grid>
            </Grid>

        </Box>
    </div>
  );
};

export default App;
