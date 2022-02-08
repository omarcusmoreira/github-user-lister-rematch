import { createModel } from "@rematch/core";
import { RootModel } from "./";

import { api } from "../api/client";
import { UserData } from "../interfaces/User";

type UserState = {
  data: UserData;
};
type FavedUserState = {
  data: UserData[];
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
  state: {
    data: [],
  } as FavedUserState,

  reducers: {
    loadFavedUsers: (state: FavedUserState, payload: UserData) => ({
      ...state,
      data: [...state.data, payload],
    }),

    removeFavedUser: (state: FavedUserState, name?: string) => ({
      ...state,
      data: state.data.filter((user) => user.name !== name),
    }),
  },
});
