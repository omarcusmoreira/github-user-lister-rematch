import { createModel } from "@rematch/core";
import { RootModel } from "./";

import { api } from "../api/client";
import { UserData } from "../interfaces/User";

type UserState = {
  data: UserData;
};

export const User = createModel<RootModel>()({
  state: {
    data: {},
  } as UserState,

  reducers: {
    loadUser: (state, payload: UserData | any) => payload,
  },
  effects: (dispatch) => ({
    async getUserData(searchedUser) {
      const user = await api.get<UserData>(`/${searchedUser}`);
      dispatch.User.loadUser(user);
    },
  }),
});

export const FavedUsers = createModel<RootModel>()({
  state: [
    {
      name: "Aurora Moreira",
      login: "aurorinhamoreira",
      avatar: "",
      bio: "Lorem ipsum dolor sit amet",
      public_repos: 12,
      isFavorited: true,
    },
    {
      name: "Patricia Moreira",
      login: "patimaria",
      avatar: "",
      bio: "Lorem ipsum dolor sit amet",
      public_repos: 36,
      isFavorited: true,
    },
    {
      name: "Thiago Moreira",
      login: "thiagovitamina",
      bio: "Lorem ipsum dolor sit amet",
      public_repos: 81,
      isFavorited: true,
    },
    {
      name: "Nicholas Moreira",
      login: "nicholas.ene",
      bio: "Lorem ipsum dolor sit amet",
      public_repos: 76,
      isFavorited: true,
    },
  ] as UserData[],

  reducers: {
    loadFavedUsers: (state: UserData[], payload: UserData) => ({
      ...state,
      payload,
    }),
  },
});
