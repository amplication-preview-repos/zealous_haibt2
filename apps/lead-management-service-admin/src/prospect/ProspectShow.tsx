import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { LEAD_TITLE_FIELD } from "../lead/LeadTitle";
import { PROFESSIONAL_TITLE_FIELD } from "../professional/ProfessionalTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProspectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lead" source="lead.id" reference="Lead">
          <TextField source={LEAD_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="professional"
          source="professional.id"
          reference="Professional"
        >
          <TextField source={PROFESSIONAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="taskList" source="taskList" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
