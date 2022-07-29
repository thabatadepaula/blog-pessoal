import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <AppBar position="static" className='bg-menu'>
                <Toolbar className='container' variant="dense">
                  <Box style={{ cursor: "pointer" }} >
                    <Typography className='title' variant="h6" color="inherit">
                        Blog Pessoal
                    </Typography>
                  </Box>

                     <Box mx={1} style={{ cursor: "pointer" }} display="flex" justifyContent="start" >
                    <Typography className='title' variant="h6" color="inherit">
                        Home
                    </Typography>
                  </Box>

                  <Box mx={1} style={{ cursor: "pointer" }} display="flex" justifyContent="start" >
                  <Typography className='title' variant="h6" color="inherit">
                      Postagens
                  </Typography>
                </Box>

                <Box mx={1} style={{ cursor: "pointer" }} display="flex" justifyContent="start" >
                <Typography className='title' variant="h6" color="inherit">
                    Temas
                </Typography>
              </Box>

              <Box mx={1} style={{ cursor: "pointer" }} display="flex" justifyContent="start" >
              <Typography className='title' variant="h6" color="inherit">
                  Cadastrar Tema
              </Typography>

              <Box mx={1} style={{ cursor: "pointer" }} display="flex" justifyContent="start" >
              <Typography className='title' variant="h6" color="inherit">
                  Logout
              </Typography>
            </Box>

            </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar