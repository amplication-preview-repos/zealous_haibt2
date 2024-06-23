import { AnalyticsTaskWhereInput } from "./AnalyticsTaskWhereInput";
import { AnalyticsTaskOrderByInput } from "./AnalyticsTaskOrderByInput";

export type AnalyticsTaskFindManyArgs = {
  where?: AnalyticsTaskWhereInput;
  orderBy?: Array<AnalyticsTaskOrderByInput>;
  skip?: number;
  take?: number;
};
