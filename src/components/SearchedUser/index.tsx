import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { dispatch, RootState } from "../../config/store/store";

import SearchedUserCard from "./SearchedUserCard";

import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

export const SearchedUser = () => {
  useEffect(() => {
    dispatch.User.getUserData("");
  }, []);

  const user = useSelector((state: RootState) => state.User.data);

  return (
    <Container>
      <Typography variant="h6" mb={2} color="rgba(0,0,0,0.6)">
        Resultado da Busca:
      </Typography>
      {user.login !== undefined ? (
        <Box display="flex" flexDirection="column">
          <SearchedUserCard
            name={user.name}
            login={user.login}
            repos={user.public_repos}
            avatar={user.avatar_url}
            user={user}
          />
        </Box>
      ) : (
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="rgba(0,0,0,0.4)"
        >
          Nenhum resultado
        </Typography>
      )}
    </Container>
  );
};
