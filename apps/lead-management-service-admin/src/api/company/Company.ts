import { Lead } from "../lead/Lead";

export type Company = {
  createdAt: Date;
  id: string;
  industry: string | null;
  leads?: Array<Lead>;
  name: string | null;
  updatedAt: Date;
  website: string | null;
};
