import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ProfessionalCreateNestedManyWithoutBusinessesInput } from "./ProfessionalCreateNestedManyWithoutBusinessesInput";
import { ProspectCreateNestedManyWithoutBusinessesInput } from "./ProspectCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  address?: AddressWhereUniqueInput | null;
  industry?: string | null;
  name?: string | null;
  professionals?: ProfessionalCreateNestedManyWithoutBusinessesInput;
  prospects?: ProspectCreateNestedManyWithoutBusinessesInput;
};
