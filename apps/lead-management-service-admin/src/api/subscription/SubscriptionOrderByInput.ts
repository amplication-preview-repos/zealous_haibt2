import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  subscriptionId?: SortOrder;
  subscriptionLevel?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
