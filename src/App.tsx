import React from "react";
import "./global.css";
import Header from "./components/Header";
import { store } from "./config/store/store";
import { Provider } from "react-redux";
import { Favorites } from "./components/Favorites";
import { SearchedUser } from "./components/SearchedUser";
import { Container, Grid, Divider } from "@mui/material";

function App() {
  console.log(store);

  return (
    <Provider store={store}>
      <Header />
      <Container sx={{ display: "flex", marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Favorites />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            style={{ marginRight: "-1px" }}
          />
          <Grid item xs={4}>
            <SearchedUser />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
