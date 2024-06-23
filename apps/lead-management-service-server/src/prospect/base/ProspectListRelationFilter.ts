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
import { ProspectWhereInput } from "./ProspectWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProspectListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProspectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProspectWhereInput)
  @IsOptional()
  @Field(() => ProspectWhereInput, {
    nullable: true,
  })
  every?: ProspectWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProspectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProspectWhereInput)
  @IsOptional()
  @Field(() => ProspectWhereInput, {
    nullable: true,
  })
  some?: ProspectWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProspectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProspectWhereInput)
  @IsOptional()
  @Field(() => ProspectWhereInput, {
    nullable: true,
  })
  none?: ProspectWhereInput;
}
export { ProspectListRelationFilter as ProspectListRelationFilter };