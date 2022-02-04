import React from "react";
import "./global.css";
import Header from "./components/Header";
import { SearchedUser } from "./components/SearchedUser";
import { Favorites } from "./components/Favorites";
import { Container, Grid, Divider } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ display: "flex", marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Favorites />
            <Divider orientation="vertical" flexItem />
          </Grid>

          <Grid item xs={4}>
            <SearchedUser />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
