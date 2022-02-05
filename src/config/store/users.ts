import { createModel } from "@rematch/core";
import { RootModel } from "./";

import { api } from "../api/client";
import { UserData } from "../interfaces/User";

type UserState = {
  data: UserData;
};

export const User = createModel<RootModel>()({
  state: {
    data: {
      name: "",
      avatar_url: "",
      login: "",
      public_repos: 0,
    },
  } as UserState,
  reducers: {
    loadUser: (state, payload: UserData | any) => payload,
  },
  effects: (dispatch) => ({
    getUserData: async () => {
      const user = await api.get<UserData>("/nearghale");
      dispatch.User.loadUser(user);
    },
  }),
});