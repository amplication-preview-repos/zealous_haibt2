/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LeadWhereUniqueInput } from "../../lead/base/LeadWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LeadCreateNestedManyWithoutCompaniesInput {
  @Field(() => [LeadWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LeadWhereUniqueInput],
  })
  connect?: Array<LeadWhereUniqueInput>;
}

export { LeadCreateNestedManyWithoutCompaniesInput as LeadCreateNestedManyWithoutCompaniesInput };
