/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyticsAddressWhereInput } from "./AnalyticsAddressWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnalyticsAddressListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnalyticsAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsAddressWhereInput)
  @IsOptional()
  @Field(() => AnalyticsAddressWhereInput, {
    nullable: true,
  })
  every?: AnalyticsAddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticsAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsAddressWhereInput)
  @IsOptional()
  @Field(() => AnalyticsAddressWhereInput, {
    nullable: true,
  })
  some?: AnalyticsAddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticsAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsAddressWhereInput)
  @IsOptional()
  @Field(() => AnalyticsAddressWhereInput, {
    nullable: true,
  })
  none?: AnalyticsAddressWhereInput;
}
export { AnalyticsAddressListRelationFilter as AnalyticsAddressListRelationFilter };
