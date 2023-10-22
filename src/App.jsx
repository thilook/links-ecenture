import { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Facebook, Instagram, LinkedIn, Web } from "@mui/icons-material";
import logo from "./assets/logo-ecenture.webp";

import "./App.css";

const ItemStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: "#04574F",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: "left",
  color: "#FFF",
  elevation: 3,
}));

const openUrl = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Item = ({ children, url }) => (
  <ItemStyled
    className="item"
    onClick={() => {
      openUrl(url);
    }}
  >
    {children}
  </ItemStyled>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      <Grid item md={4}></Grid>
      <Grid item md={4} justifyItems="center">
        <img src={logo} width="260" height="191" alt="logo" />
        <p style={{ fontSize: '20px'}}>Entre em contato conosco!</p>
        <Item url="https://www.facebook.com/Ecenture-111879148052458/">
          <Grid container alignItems="center">
            <Grid sm={2} md={1}>
              <Facebook fontSize="medium" style={{ marginTop: 2 }} />
            </Grid>
            <Grid sm={10} md={11}>
              Facebook
            </Grid>
          </Grid>
        </Item>
        <Item url="https://www.instagram.com/_ecenture/">
          <Grid container alignItems="center">
            <Grid sm={2} md={1}>
              <Instagram fontSize="medium" style={{ marginTop: 2 }} />
            </Grid>
            <Grid sm={10} md={11}>
              Instagram
            </Grid>
          </Grid>
        </Item>
        <Item url="https://www.linkedin.com/company/ecenture-tecnologia/mycompany/verification/">
          <Grid container alignItems="center">
            <Grid sm={2} md={1}>
              <LinkedIn fontSize="medium" style={{ marginTop: 2 }} />
            </Grid>
            <Grid sm={10} md={11}>
              LinkedIn
            </Grid>
          </Grid>
        </Item>
        <Item url="https://ecenture.com.br">
          <Grid container alignItems="center">
            <Grid sm={2} md={1}>
              <Web fontSize="medium" style={{ marginTop: 2 }} />
            </Grid>
            <Grid sm={10} md={11}>
              Nosso site
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item md={4}></Grid>
    </Grid>
  );
}

export default App;
