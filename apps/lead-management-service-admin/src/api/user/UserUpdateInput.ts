import { ProspectUpdateManyWithoutUsersInput } from "./ProspectUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SubscriptionUpdateManyWithoutUsersInput } from "./SubscriptionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  prospects?: ProspectUpdateManyWithoutUsersInput;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  subscriptions?: SubscriptionUpdateManyWithoutUsersInput;
  username?: string;
};
