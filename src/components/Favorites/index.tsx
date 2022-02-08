import { Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import FavoritesCard from "./FavoritesCard";
import { UserData } from "../../config/interfaces/User";
import { dispatch, RootState } from "../../config/store/store";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import searchImg from "../../assets/search2.svg";

export function Favorites() {
  const favedUsers = useSelector((state: RootState) => state.FavedUsers);
  console.log(favedUsers);

  return (
    <Container>
      <Typography variant="h6" mb={2} color="rgba(0,0,0,0.6)">
        Favoritos
      </Typography>
      {favedUsers.data.length === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <img src={searchImg} alt="" height="300px" />
          <Typography variant="subtitle1" mt={5} color="rgba(0,0,0,0.4)">
            Nenhum usuário favoritado
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {favedUsers.data.map((favoritedUser) => {
            return (
              <Grid item xs={4}>
                <FavoritesCard
                  name={favoritedUser.name}
                  login={favoritedUser.login}
                  public_repos={favoritedUser.public_repos}
                  avatar_url={favoritedUser.avatar_url}
                  html_url={favoritedUser.html_url}
                  bio={favoritedUser.bio}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}
