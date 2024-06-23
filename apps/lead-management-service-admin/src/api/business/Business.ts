import { Address } from "../address/Address";
import { Professional } from "../professional/Professional";
import { Prospect } from "../prospect/Prospect";

export type Business = {
  address?: Address | null;
  createdAt: Date;
  id: string;
  industry: string | null;
  name: string | null;
  professionals?: Array<Professional>;
  prospects?: Array<Prospect>;
  updatedAt: Date;
};
