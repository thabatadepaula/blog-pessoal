import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vinde!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Expresse seus sentimentos, dicas e opniões sobre a maternidade. Deixe o seu maternar mais leve!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="botao">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/w5MjXXP.png"
            alt="Tela Inicial - Mães unidas"
            width="500px"
            height="350px"
          />
        </Grid>
        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </>
  );
}

export default Home;