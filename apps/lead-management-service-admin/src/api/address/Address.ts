import { Business } from "../business/Business";
import { Lead } from "../lead/Lead";

export type Address = {
  businesses?: Array<Business>;
  city: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  leads?: Array<Lead>;
  postalCode: string | null;
  state: string | null;
  street: string | null;
  updatedAt: Date;
};
