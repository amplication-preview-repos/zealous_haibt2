import { LeadCreateNestedManyWithoutCompaniesInput } from "./LeadCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  industry?: string | null;
  leads?: LeadCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
  website?: string | null;
};
