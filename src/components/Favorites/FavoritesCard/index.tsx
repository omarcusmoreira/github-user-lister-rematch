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

interface FavoritesCardProps {
  name?: String;
  login?: String;
  bio?: String;
  public_repos?: Number;
  isFavorited?: boolean;
}

const FavoritesCard: React.FC<FavoritesCardProps> = ({
  name,
  login,
  bio,
  public_repos,
}) => {
  return (
    <Box sx={{ maxWidth: 375 }}>
      <Card variant="outlined" sx={{ minHeight: 200 }}>
        <CardHeader
          avatar={
            <Avatar
              alt="Marcus Moreira"
              src="https://github.com/omarcusmoreira.png"
            />
          }
          title={name}
          subheader={login}
        />
        <CardContent>
          <Typography variant="body2">Lorem Ipsum dolor sit amet</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{public_repos} repositórios</Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default FavoritesCard;
