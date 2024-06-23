import { Business } from "../business/Business";
import { Lead } from "../lead/Lead";
import { Professional } from "../professional/Professional";
import { User } from "../user/User";

export type Prospect = {
  business?: Business | null;
  createdAt: Date;
  id: string;
  lead?: Lead | null;
  professional?: Professional | null;
  taskList?: Array<"Option1">;
  updatedAt: Date;
  user?: User | null;
};
