import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";
import { BusinessTitle } from "../business/BusinessTitle";
import { LeadTitle } from "../lead/LeadTitle";
import { ProfessionalTitle } from "../professional/ProfessionalTitle";
import { UserTitle } from "../user/UserTitle";

export const ProspectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <ReferenceInput source="lead.id" reference="Lead" label="lead">
          <SelectInput optionText={LeadTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="professional.id"
          reference="Professional"
          label="professional"
        >
          <SelectInput optionText={ProfessionalTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="taskList"
          source="taskList"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
