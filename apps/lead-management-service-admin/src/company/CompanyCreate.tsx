import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LeadTitle } from "../lead/LeadTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="industry" source="industry" />
        <ReferenceArrayInput
          source="leads"
          reference="Lead"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeadTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Create>
  );
};
