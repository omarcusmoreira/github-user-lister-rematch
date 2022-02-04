import { Container, Grid, Typography } from "@mui/material";
import FavoritesCard from "./FavoritesCard";

export function Favorites() {
  return (
    <Container>
      <Typography variant="h6" mb={2}>
        Favoritos
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FavoritesCard />
        </Grid>
        <Grid item xs={4}>
          <FavoritesCard />
        </Grid>
        <Grid item xs={4}>
          <FavoritesCard />
        </Grid>
        <Grid item xs={4}>
          <FavoritesCard />
        </Grid>
        <Grid item xs={4}>
          <FavoritesCard />
        </Grid>
        <Grid item xs={4}>
          <FavoritesCard />
        </Grid>
      </Grid>
      <Typography variant="subtitle1">Nenhum usuário favoritado</Typography>
    </Container>
  );
}
