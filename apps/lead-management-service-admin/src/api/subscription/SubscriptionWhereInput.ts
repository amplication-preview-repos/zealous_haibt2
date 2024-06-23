import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  subscriptionId?: StringNullableFilter;
  subscriptionLevel?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
