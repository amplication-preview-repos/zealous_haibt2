import { BusinessCreateNestedManyWithoutAddressesInput } from "./BusinessCreateNestedManyWithoutAddressesInput";
import { LeadCreateNestedManyWithoutAddressesInput } from "./LeadCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  businesses?: BusinessCreateNestedManyWithoutAddressesInput;
  city?: string | null;
  country?: string | null;
  leads?: LeadCreateNestedManyWithoutAddressesInput;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
};
