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
import { AnalyticsAddressWhereInput } from "./AnalyticsAddressWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnalyticsAddressOrderByInput } from "./AnalyticsAddressOrderByInput";

@ArgsType()
class AnalyticsAddressFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnalyticsAddressWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnalyticsAddressWhereInput, { nullable: true })
  @Type(() => AnalyticsAddressWhereInput)
  where?: AnalyticsAddressWhereInput;

  @ApiProperty({
    required: false,
    type: [AnalyticsAddressOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnalyticsAddressOrderByInput], { nullable: true })
  @Type(() => AnalyticsAddressOrderByInput)
  orderBy?: Array<AnalyticsAddressOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AnalyticsAddressFindManyArgs as AnalyticsAddressFindManyArgs };
