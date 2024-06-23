import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ProspectCreateNestedManyWithoutProfessionalsInput } from "./ProspectCreateNestedManyWithoutProfessionalsInput";

export type ProfessionalCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  prospects?: ProspectCreateNestedManyWithoutProfessionalsInput;
};
