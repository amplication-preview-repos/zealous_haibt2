import { BusinessListRelationFilter } from "../business/BusinessListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";

export type AddressWhereInput = {
  businesses?: BusinessListRelationFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  leads?: LeadListRelationFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
};
