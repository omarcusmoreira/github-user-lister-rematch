import * as React from "react";
import { UserData } from "../../../config/interfaces/User";
import { dispatch } from "../../../config/store/store";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface SearchedUserCardProps {
  name?: string;
  login?: string;
  repos?: number;
  avatar?: string;
  bio?: string;
  user: UserData;
}

const SearchedUserCard: React.FC<SearchedUserCardProps> = ({
  name,
  login,
  repos,
  avatar,
  user,
}) => {
  return (
    <Box sx={{ maxWidth: 375 }}>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar alt={name} src={avatar} />}
          title={name}
          subheader={`#${login}`}
          action={
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                dispatch.FavedUsers.loadFavedUsers(user);
              }}
            >
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
