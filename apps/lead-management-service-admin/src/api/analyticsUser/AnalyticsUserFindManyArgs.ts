import { AnalyticsUserWhereInput } from "./AnalyticsUserWhereInput";
import { AnalyticsUserOrderByInput } from "./AnalyticsUserOrderByInput";

export type AnalyticsUserFindManyArgs = {
  where?: AnalyticsUserWhereInput;
  orderBy?: Array<AnalyticsUserOrderByInput>;
  skip?: number;
  take?: number;
};
