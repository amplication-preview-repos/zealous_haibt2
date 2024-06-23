import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { ProfessionalTitle } from "../professional/ProfessionalTitle";
import { ProspectTitle } from "../prospect/ProspectTitle";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <TextInput label="industry" source="industry" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="professionals"
          reference="Professional"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfessionalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="prospects"
          reference="Prospect"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProspectTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
