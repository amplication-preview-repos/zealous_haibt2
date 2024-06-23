/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AnalyticsProfessionalService } from "../analyticsProfessional.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AnalyticsProfessionalCreateInput } from "./AnalyticsProfessionalCreateInput";
import { AnalyticsProfessional } from "./AnalyticsProfessional";
import { AnalyticsProfessionalFindManyArgs } from "./AnalyticsProfessionalFindManyArgs";
import { AnalyticsProfessionalWhereUniqueInput } from "./AnalyticsProfessionalWhereUniqueInput";
import { AnalyticsProfessionalUpdateInput } from "./AnalyticsProfessionalUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AnalyticsProfessionalControllerBase {
  constructor(
    protected readonly service: AnalyticsProfessionalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AnalyticsProfessional })
  @nestAccessControl.UseRoles({
    resource: "AnalyticsProfessional",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAnalyticsProfessional(
    @common.Body() data: AnalyticsProfessionalCreateInput
  ): Promise<AnalyticsProfessional> {
    return await this.service.createAnalyticsProfessional({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AnalyticsProfessional] })
  @ApiNestedQuery(AnalyticsProfessionalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AnalyticsProfessional",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async analyticsProfessionals(
    @common.Req() request: Request
  ): Promise<AnalyticsProfessional[]> {
    const args = plainToClass(AnalyticsProfessionalFindManyArgs, request.query);
    return this.service.analyticsProfessionals({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AnalyticsProfessional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalyticsProfessional",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async analyticsProfessional(
    @common.Param() params: AnalyticsProfessionalWhereUniqueInput
  ): Promise<AnalyticsProfessional | null> {
    const result = await this.service.analyticsProfessional({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AnalyticsProfessional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalyticsProfessional",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAnalyticsProfessional(
    @common.Param() params: AnalyticsProfessionalWhereUniqueInput,
    @common.Body() data: AnalyticsProfessionalUpdateInput
  ): Promise<AnalyticsProfessional | null> {
    try {
      return await this.service.updateAnalyticsProfessional({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AnalyticsProfessional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalyticsProfessional",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAnalyticsProfessional(
    @common.Param() params: AnalyticsProfessionalWhereUniqueInput
  ): Promise<AnalyticsProfessional | null> {
    try {
      return await this.service.deleteAnalyticsProfessional({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}