import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  industry?: StringNullableFilter;
  leads?: LeadListRelationFilter;
  name?: StringNullableFilter;
  website?: StringNullableFilter;
};
