import React from "react";
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const CountContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const CountButton = styled(Button)(({ theme }) => ({
  minWidth: '40px',
  height: '40px',
  margin: theme.spacing(0, 1),
}));

const CountDisplay = styled(Typography)(({ theme }) => ({
  minWidth: '40px',
  textAlign: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: "red"
}));

export default function ItemCount({ stock, count, increment, decrement }) {
  return (
    <CountContainer>
      <CountButton variant="contained" color="primary" onClick={decrement} disabled={count <= 0}>
        -
      </CountButton>
      <CountDisplay variant="body1">
        {count}
      </CountDisplay>
      <CountButton
        variant="contained"
        color="primary"
        onClick={increment}
        disabled={count >= stock}
      >
        +
      </CountButton>
    </CountContainer>
  );
}