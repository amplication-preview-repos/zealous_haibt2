import { Prospect as TProspect } from "../api/prospect/Prospect";

export const PROSPECT_TITLE_FIELD = "id";

export const ProspectTitle = (record: TProspect): string => {
  return record.id?.toString() || String(record.id);
};
