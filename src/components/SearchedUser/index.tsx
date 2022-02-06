import { Container, Typography } from "@mui/material";
import SearchedUserCard from "./SearchedUserCard";
import React, { useEffect, useState, useRef, KeyboardEvent } from "react";
import { dispatch, RootState } from "../../config/store/store";

import { useSelector } from "react-redux";

export const SearchedUser = () => {
  useEffect(() => {
    dispatch.User.getUserData("");
  }, []);

  const { name, login, public_repos, avatar_url } = useSelector(
    (state: RootState) => state.User.data
  );

  return (
    <Container>
      <Typography variant="h6" mb={2}>
        Resultado da Busca:
      </Typography>
      {login !== undefined ? (
        <SearchedUserCard
          name={name}
          login={login}
          repos={public_repos}
          avatar={avatar_url}
        />
      ) : (
        <Typography variant="subtitle1">Nenhum resultado</Typography>
      )}
    </Container>
  );
};
