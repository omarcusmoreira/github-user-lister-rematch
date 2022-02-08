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
import { dispatch, RootState } from "../../../config/store/store";

interface FavoritesCardProps {
  name?: string;
  login?: string;
  avatar_url?: string;
  public_repos?: number;
  isFavorited?: boolean;
  html_url?: string;
}

const FavoritesCard: React.FC<FavoritesCardProps> = ({
  name,
  login,
  avatar_url,
  public_repos,
  html_url,
}) => {
  return (
    <Box sx={{ maxWidth: 375 }}>
      <Card variant="outlined" sx={{ minHeight: 200 }}>
        <CardHeader
          avatar={<Avatar alt={name} src={avatar_url} />}
          title={name}
          subheader={login}
        />
        <CardContent>
          <Typography variant="body2">Lorem Ipsum dolor sit amet</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={html_url}>
            {public_repos} repositórios
          </Button>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              dispatch.FavedUsers.removeFavedUser(name);
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default FavoritesCard;
