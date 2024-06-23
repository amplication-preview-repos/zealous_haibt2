import { BusinessUpdateManyWithoutAddressesInput } from "./BusinessUpdateManyWithoutAddressesInput";
import { LeadUpdateManyWithoutAddressesInput } from "./LeadUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  businesses?: BusinessUpdateManyWithoutAddressesInput;
  city?: string | null;
  country?: string | null;
  leads?: LeadUpdateManyWithoutAddressesInput;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
};
