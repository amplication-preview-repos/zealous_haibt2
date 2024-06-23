import { AnalyticsCompanyWhereInput } from "./AnalyticsCompanyWhereInput";
import { AnalyticsCompanyOrderByInput } from "./AnalyticsCompanyOrderByInput";

export type AnalyticsCompanyFindManyArgs = {
  where?: AnalyticsCompanyWhereInput;
  orderBy?: Array<AnalyticsCompanyOrderByInput>;
  skip?: number;
  take?: number;
};
