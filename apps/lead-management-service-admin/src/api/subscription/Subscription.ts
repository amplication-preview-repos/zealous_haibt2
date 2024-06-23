import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  id: string;
  subscriptionId: string | null;
  subscriptionLevel: string | null;
  updatedAt: Date;
  user?: User | null;
};
