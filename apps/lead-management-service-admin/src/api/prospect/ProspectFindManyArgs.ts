import { ProspectWhereInput } from "./ProspectWhereInput";
import { ProspectOrderByInput } from "./ProspectOrderByInput";

export type ProspectFindManyArgs = {
  where?: ProspectWhereInput;
  orderBy?: Array<ProspectOrderByInput>;
  skip?: number;
  take?: number;
};
