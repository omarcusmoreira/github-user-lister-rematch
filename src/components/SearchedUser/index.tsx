import { Container, Typography } from "@mui/material";
import SearchedUserCard from "./SearchedUserCard";
import React, { useEffect, useState, useRef, KeyboardEvent } from "react";
import { dispatch, RootState } from "../../config/store/store";

import { useSelector } from "react-redux";

export const SearchedUser = () => {
  useEffect(() => {
    dispatch.User.getUserData("");
  }, []);

  const user = useSelector((state: RootState) => state.User.data);

  return (
    <Container>
      <Typography variant="h6" mb={2}>
        Resultado da Busca:
      </Typography>
      {user.login !== undefined ? (
        <SearchedUserCard
          name={user.name}
          login={user.login}
          repos={user.public_repos}
          avatar={user.avatar_url}
          user={user}
        />
      ) : (
        <Typography variant="subtitle1">Nenhum resultado</Typography>
      )}
    </Container>
  );
};
