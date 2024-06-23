import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProspectListRelationFilter } from "../prospect/ProspectListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  prospects?: ProspectListRelationFilter;
  role?: RoleWhereUniqueInput;
  subscriptions?: SubscriptionListRelationFilter;
  username?: StringFilter;
};
