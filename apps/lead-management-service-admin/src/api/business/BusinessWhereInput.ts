import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProfessionalListRelationFilter } from "../professional/ProfessionalListRelationFilter";
import { ProspectListRelationFilter } from "../prospect/ProspectListRelationFilter";

export type BusinessWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  industry?: StringNullableFilter;
  name?: StringNullableFilter;
  professionals?: ProfessionalListRelationFilter;
  prospects?: ProspectListRelationFilter;
};
