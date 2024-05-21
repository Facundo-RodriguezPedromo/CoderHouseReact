import React from "react";
import { Typography, Grid, Link, Container } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled("footer")(({ theme }) => ({
  background: "linear-gradient(to right, #051937, #004d7a)",
  color: "#fff",
  padding: "10px 0", // Reducir el padding para un footer más fino
  width: "100%",
  position: "fixed",
  bottom: 0,
  left: 0,
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Información de contacto
          </Typography>
          <Typography variant="body1">Teléfono: (+598) 92 076 246</Typography>
          <Typography variant="body1">
            Correo electrónico: facundorodriguez7714@gmail.com
          </Typography>
          <Typography variant="body1">
            <Link
              href="https://www.linkedin.com/in/facundo-rodr%C3%ADguez-perdomo-804956211/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              LinkedIn
            </Link>
          </Typography>
        </Grid>
        {/* Otro contenido del footer, si es necesario */}
      </FooterContent>
    </FooterContainer>
  );
}
