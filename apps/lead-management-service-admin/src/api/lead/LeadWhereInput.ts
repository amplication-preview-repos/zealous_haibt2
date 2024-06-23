import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProspectListRelationFilter } from "../prospect/ProspectListRelationFilter";

export type LeadWhereInput = {
  address?: AddressWhereUniqueInput;
  company?: CompanyWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  prospects?: ProspectListRelationFilter;
};
