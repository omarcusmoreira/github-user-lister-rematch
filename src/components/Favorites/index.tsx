import { Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import FavoritesCard from "./FavoritesCard";
import { UserData } from "../../config/interfaces/User";
import { dispatch, RootState } from "../../config/store/store";
import { useSelector } from "react-redux";

export function Favorites() {
  const newUser = {
    name: "Isa Nogueira",
    login: "isanog",
    public_repos: 13,
    isFavorited: true,
  };

  // useEffect(() => {
  //   dispatch.FavedUsers.loadFavedUsers(favoritedUsers[0]);
  // }, []);
  //dispatch.Users.loadFavedUsers(newUser);
  const favedUsers = useSelector((state: RootState) => state.FavedUsers);
  console.log(favedUsers);

  return (
    <Container>
      <Typography variant="h6" mb={2}>
        Favoritos
      </Typography>
      <Grid container spacing={2}>
        {favedUsers.data.map((favoritedUser) => {
          return (
            <Grid item xs={4}>
              <FavoritesCard
                name={favoritedUser.name}
                login={favoritedUser.login}
                public_repos={favoritedUser.public_repos}
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography variant="subtitle1">Nenhum usuário favoritado</Typography>
    </Container>
  );
}
