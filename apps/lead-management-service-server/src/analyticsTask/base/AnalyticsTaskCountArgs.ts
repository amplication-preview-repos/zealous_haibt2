/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyticsTaskWhereInput } from "./AnalyticsTaskWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AnalyticsTaskCountArgs {
  @ApiProperty({
    required: false,
    type: () => AnalyticsTaskWhereInput,
  })
  @Field(() => AnalyticsTaskWhereInput, { nullable: true })
  @Type(() => AnalyticsTaskWhereInput)
  where?: AnalyticsTaskWhereInput;
}

export { AnalyticsTaskCountArgs as AnalyticsTaskCountArgs };