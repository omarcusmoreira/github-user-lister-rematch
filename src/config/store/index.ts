import { Models } from "@rematch/core";

import { User } from "./users";

export interface RootModel extends Models<RootModel> {
  User: typeof User;
}
export const models: RootModel = {
  User,
};
