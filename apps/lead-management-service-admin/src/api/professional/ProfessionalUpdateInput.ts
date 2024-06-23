import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ProspectUpdateManyWithoutProfessionalsInput } from "./ProspectUpdateManyWithoutProfessionalsInput";

export type ProfessionalUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  prospects?: ProspectUpdateManyWithoutProfessionalsInput;
};
