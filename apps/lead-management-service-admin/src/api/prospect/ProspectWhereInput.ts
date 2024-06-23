import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProspectWhereInput = {
  business?: BusinessWhereUniqueInput;
  id?: StringFilter;
  lead?: LeadWhereUniqueInput;
  professional?: ProfessionalWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
