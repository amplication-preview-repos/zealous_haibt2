import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  subscriptionId?: string | null;
  subscriptionLevel?: string | null;
  user?: UserWhereUniqueInput | null;
};
