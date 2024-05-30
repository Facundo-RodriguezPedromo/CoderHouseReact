import React, { useState } from 'react';
import { db } from '../hooks/firebase';
import { Button, TextField, Grid, Typography } from '@mui/material';

const Checkout = ({ cartItems }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      name,
      address,
      email,
      phone,
      items: cartItems,
      createdAt: new Date(),
    };

    try {
      await db.collection('orders').add(orderData);
      alert('¡Pedido realizado con éxito!');
      
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Address"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Phone"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Realizar compra
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Checkout;