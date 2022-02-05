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
interface SearchedUserCardProps {
  name?: string;
  login?: string;
  repos?: number;
  avatar?: string;
}

const SearchedUserCard: React.FC<SearchedUserCardProps> = ({
  name,
  login,
  repos,
  avatar,
}) => {
  return (
    <Box sx={{ maxWidth: 375 }}>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar alt={name} src={avatar} />}
          title={name}
          subheader={login}
          action={
            <IconButton aria-label="add to favorites" onClick={() => {}}>
              <FavoriteIcon />
            </IconButton>
          }
        />
        <CardContent>{repos} repositórios</CardContent>
      </Card>
    </Box>
  );
};

export default SearchedUserCard;