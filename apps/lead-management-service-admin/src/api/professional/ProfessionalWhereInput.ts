import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProspectListRelationFilter } from "../prospect/ProspectListRelationFilter";

export type ProfessionalWhereInput = {
  business?: BusinessWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  prospects?: ProspectListRelationFilter;
};