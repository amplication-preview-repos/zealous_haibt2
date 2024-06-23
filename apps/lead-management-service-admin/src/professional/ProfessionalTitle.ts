import { Professional as TProfessional } from "../api/professional/Professional";

export const PROFESSIONAL_TITLE_FIELD = "firstName";

export const ProfessionalTitle = (record: TProfessional): string => {
  return record.firstName?.toString() || String(record.id);
};
