import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "./AddressTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="state" source="state" />
        <TextField label="street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Business"
          target="addressId"
          label="Businesses"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="industry" source="industry" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Lead" target="addressId" label="Leads">
          <Datagrid rowClick="show">
            <ReferenceField
              label="address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
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
      </SimpleShowLayout>
    </Show>
  );
};
