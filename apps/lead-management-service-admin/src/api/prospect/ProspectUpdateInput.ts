import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProspectUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  lead?: LeadWhereUniqueInput | null;
  professional?: ProfessionalWhereUniqueInput | null;
  taskList?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
};
