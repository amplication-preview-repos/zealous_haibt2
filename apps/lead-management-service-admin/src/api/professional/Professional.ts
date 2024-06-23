import { Business } from "../business/Business";
import { Prospect } from "../prospect/Prospect";

export type Professional = {
  business?: Business | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  prospects?: Array<Prospect>;
  updatedAt: Date;
};
