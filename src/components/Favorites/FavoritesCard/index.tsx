import * as React from "react";
import { dispatch } from "../../../config/store/store";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

interface FavoritesCardProps {
  name?: string;
  login?: string;
  avatar_url?: string;
  public_repos?: number;
  isFavorited?: boolean;
  html_url?: string;
  bio?: string;
}

const FavoritesCard: React.FC<FavoritesCardProps> = ({
  name,
  login,
  avatar_url,
  public_repos,
  html_url,
  bio,
}) => {
  return (
    <Box sx={{ maxWidth: 375 }}>
      <Card
        variant="outlined"
        sx={{
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader
          avatar={<Avatar alt={name} src={avatar_url} />}
          title={name}
          subheader={`#${login}`}
        />
        <CardContent>
          <Typography variant="body2">
            {!bio ? "Sem Biografia" : bio}
          </Typography>
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
            <HeartBrokenIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default FavoritesCard;
