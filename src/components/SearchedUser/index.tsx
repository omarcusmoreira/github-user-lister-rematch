import { Container, Typography } from "@mui/material";
import SearchedUserCard from "./SearchedUserCard";

export function SearchedUser() {
  return (
    <Container>
      <Typography variant="h6" mb={2}>
        Resultado da Busca
      </Typography>
      <SearchedUserCard />
      <Typography variant="subtitle1">Nenhum resultado</Typography>
    </Container>
  );
}
