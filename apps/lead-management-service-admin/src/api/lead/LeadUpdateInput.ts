import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ProspectUpdateManyWithoutLeadsInput } from "./ProspectUpdateManyWithoutLeadsInput";

export type LeadUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  prospects?: ProspectUpdateManyWithoutLeadsInput;
};
