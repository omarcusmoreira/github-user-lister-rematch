import { Models } from "@rematch/core";

import { User, FavedUsers } from "./users";

export interface RootModel extends Models<RootModel> {
  User: typeof User;
  FavedUsers: typeof FavedUsers;
}
export const models: RootModel = {
  User,
  FavedUsers,
};
