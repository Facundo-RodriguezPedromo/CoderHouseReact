import React from "react";
import { Typography, Link, Container } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled("footer")(({ theme }) => ({
  background: "linear-gradient(to right, #051937, #004d7a)", 
  color: "#fff",
  padding: theme.spacing(1), 
  width: "100%",
  position: "fixed",
  bottom: 0,
  left: 0,
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
  flexDirection: "row",
}));

const ContactInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          <Typography variant="body1">Tel: (+598) 92 076 246</Typography>
          <Typography variant="body1">Email: facundorodriguez7714@gmail.com</Typography>
          <Typography variant="body1">
            <Link
              href="https://www.linkedin.com/in/facundo-rodr%C3%ADguez-perdomo-804956211/"
              target="_blank"
              color="inherit"
            >
              LinkedIn
            </Link>
          </Typography>
        </ContactInfo>
      </FooterContent>
    </FooterContainer>
  );
}