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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";
import { Type } from "class-transformer";

@InputType()
class RoleUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutRolesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutRolesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutRolesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutRolesInput;
}

export { RoleUpdateInput as RoleUpdateInput };
