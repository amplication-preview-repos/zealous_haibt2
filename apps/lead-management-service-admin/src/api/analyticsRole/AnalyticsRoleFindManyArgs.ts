import { AnalyticsRoleWhereInput } from "./AnalyticsRoleWhereInput";
import { AnalyticsRoleOrderByInput } from "./AnalyticsRoleOrderByInput";

export type AnalyticsRoleFindManyArgs = {
  where?: AnalyticsRoleWhereInput;
  orderBy?: Array<AnalyticsRoleOrderByInput>;
  skip?: number;
  take?: number;
};
