import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const card = (
  <React.Fragment>
    <CardHeader
      avatar={
        <Avatar
          alt="Marcus Moreira"
          src="https://github.com/omarcusmoreira.png"
        />
      }
      title="Marcus Moreira"
      subheader="#omarcusmoreira"
    />
    <CardContent>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">17 repositórios</Button>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  </React.Fragment>
);

export default function FavoritesCard() {
  return (
    <Box sx={{ maxWidth: 375 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
