import { AnalyticsProfessional as TAnalyticsProfessional } from "../api/analyticsProfessional/AnalyticsProfessional";

export const ANALYTICSPROFESSIONAL_TITLE_FIELD = "id";

export const AnalyticsProfessionalTitle = (
  record: TAnalyticsProfessional
): string => {
  return record.id?.toString() || String(record.id);
};
