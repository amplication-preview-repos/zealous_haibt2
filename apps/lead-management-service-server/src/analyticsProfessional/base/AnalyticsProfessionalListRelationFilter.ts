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
import { AnalyticsProfessionalWhereInput } from "./AnalyticsProfessionalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnalyticsProfessionalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnalyticsProfessionalWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsProfessionalWhereInput)
  @IsOptional()
  @Field(() => AnalyticsProfessionalWhereInput, {
    nullable: true,
  })
  every?: AnalyticsProfessionalWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticsProfessionalWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsProfessionalWhereInput)
  @IsOptional()
  @Field(() => AnalyticsProfessionalWhereInput, {
    nullable: true,
  })
  some?: AnalyticsProfessionalWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticsProfessionalWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsProfessionalWhereInput)
  @IsOptional()
  @Field(() => AnalyticsProfessionalWhereInput, {
    nullable: true,
  })
  none?: AnalyticsProfessionalWhereInput;
}
export { AnalyticsProfessionalListRelationFilter as AnalyticsProfessionalListRelationFilter };