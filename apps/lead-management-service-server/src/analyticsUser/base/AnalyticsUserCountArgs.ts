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
import { AnalyticsUserWhereInput } from "./AnalyticsUserWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AnalyticsUserCountArgs {
  @ApiProperty({
    required: false,
    type: () => AnalyticsUserWhereInput,
  })
  @Field(() => AnalyticsUserWhereInput, { nullable: true })
  @Type(() => AnalyticsUserWhereInput)
  where?: AnalyticsUserWhereInput;
}

export { AnalyticsUserCountArgs as AnalyticsUserCountArgs };