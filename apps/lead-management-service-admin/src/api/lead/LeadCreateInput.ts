import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ProspectCreateNestedManyWithoutLeadsInput } from "./ProspectCreateNestedManyWithoutLeadsInput";

export type LeadCreateInput = {
  address?: AddressWhereUniqueInput | null;
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  prospects?: ProspectCreateNestedManyWithoutLeadsInput;
};
