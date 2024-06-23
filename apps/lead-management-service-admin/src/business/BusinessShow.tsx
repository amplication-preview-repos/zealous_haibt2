import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BUSINESS_TITLE_FIELD } from "./BusinessTitle";
import { LEAD_TITLE_FIELD } from "../lead/LeadTitle";
import { PROFESSIONAL_TITLE_FIELD } from "../professional/ProfessionalTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const BusinessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="industry" source="industry" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Professional"
          target="businessId"
          label="Professionals"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="firstName" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="phoneNumber" source="phoneNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Prospect"
          target="businessId"
          label="Prospects"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
