import { Prospect } from "../prospect/Prospect";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  prospects?: Array<Prospect>;
  role?: Role | null;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
};
