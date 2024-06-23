import { AnalyticsBusinessWhereInput } from "./AnalyticsBusinessWhereInput";
import { AnalyticsBusinessOrderByInput } from "./AnalyticsBusinessOrderByInput";

export type AnalyticsBusinessFindManyArgs = {
  where?: AnalyticsBusinessWhereInput;
  orderBy?: Array<AnalyticsBusinessOrderByInput>;
  skip?: number;
  take?: number;
};
