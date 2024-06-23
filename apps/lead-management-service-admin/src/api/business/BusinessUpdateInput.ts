import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ProfessionalUpdateManyWithoutBusinessesInput } from "./ProfessionalUpdateManyWithoutBusinessesInput";
import { ProspectUpdateManyWithoutBusinessesInput } from "./ProspectUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  industry?: string | null;
  name?: string | null;
  professionals?: ProfessionalUpdateManyWithoutBusinessesInput;
  prospects?: ProspectUpdateManyWithoutBusinessesInput;
};
