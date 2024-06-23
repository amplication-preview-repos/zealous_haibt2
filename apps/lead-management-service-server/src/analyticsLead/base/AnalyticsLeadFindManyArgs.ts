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
import { AnalyticsLeadWhereInput } from "./AnalyticsLeadWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnalyticsLeadOrderByInput } from "./AnalyticsLeadOrderByInput";

@ArgsType()
class AnalyticsLeadFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnalyticsLeadWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnalyticsLeadWhereInput, { nullable: true })
  @Type(() => AnalyticsLeadWhereInput)
  where?: AnalyticsLeadWhereInput;

  @ApiProperty({
    required: false,
    type: [AnalyticsLeadOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnalyticsLeadOrderByInput], { nullable: true })
  @Type(() => AnalyticsLeadOrderByInput)
  orderBy?: Array<AnalyticsLeadOrderByInput>;

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

export { AnalyticsLeadFindManyArgs as AnalyticsLeadFindManyArgs };
