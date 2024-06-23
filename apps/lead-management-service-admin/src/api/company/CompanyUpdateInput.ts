import { LeadUpdateManyWithoutCompaniesInput } from "./LeadUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  industry?: string | null;
  leads?: LeadUpdateManyWithoutCompaniesInput;
  name?: string | null;
  website?: string | null;
};
