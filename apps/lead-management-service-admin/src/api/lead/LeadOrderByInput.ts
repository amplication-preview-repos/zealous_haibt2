import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  addressId?: SortOrder;
  companyId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
