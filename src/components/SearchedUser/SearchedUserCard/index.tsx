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
      action={
        <IconButton aria-label="add to favorites" onClick={() => {}}>
          <FavoriteIcon />
        </IconButton>
      }
    />
    <CardContent>17 repositórios</CardContent>
  </React.Fragment>
);

export default function SearchedUserCard() {
  return (
    <Box sx={{ maxWidth: 375 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
