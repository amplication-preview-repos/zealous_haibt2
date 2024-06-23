import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  subscriptionId?: string | null;
  subscriptionLevel?: string | null;
  user?: UserWhereUniqueInput | null;
};
