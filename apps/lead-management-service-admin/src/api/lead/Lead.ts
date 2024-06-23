import { Address } from "../address/Address";
import { Company } from "../company/Company";
import { Prospect } from "../prospect/Prospect";

export type Lead = {
  address?: Address | null;
  company?: Company | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  prospects?: Array<Prospect>;
  updatedAt: Date;
};
