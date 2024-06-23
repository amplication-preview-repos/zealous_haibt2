import { AnalyticsAddressWhereInput } from "./AnalyticsAddressWhereInput";
import { AnalyticsAddressOrderByInput } from "./AnalyticsAddressOrderByInput";

export type AnalyticsAddressFindManyArgs = {
  where?: AnalyticsAddressWhereInput;
  orderBy?: Array<AnalyticsAddressOrderByInput>;
  skip?: number;
  take?: number;
};
