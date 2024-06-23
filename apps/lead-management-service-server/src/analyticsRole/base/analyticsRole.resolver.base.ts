/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AnalyticsRole } from "./AnalyticsRole";
import { AnalyticsRoleCountArgs } from "./AnalyticsRoleCountArgs";
import { AnalyticsRoleFindManyArgs } from "./AnalyticsRoleFindManyArgs";
import { AnalyticsRoleFindUniqueArgs } from "./AnalyticsRoleFindUniqueArgs";
import { DeleteAnalyticsRoleArgs } from "./DeleteAnalyticsRoleArgs";
import { AnalyticsRoleService } from "../analyticsRole.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsRole)
export class AnalyticsRoleResolverBase {
  constructor(
    protected readonly service: AnalyticsRoleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AnalyticsRole",
    action: "read",
    possession: "any",
  })
  async _analyticsRolesMeta(
    @graphql.Args() args: AnalyticsRoleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AnalyticsRole])
  @nestAccessControl.UseRoles({
    resource: "AnalyticsRole",
    action: "read",
    possession: "any",
  })
  async analyticsRoles(
    @graphql.Args() args: AnalyticsRoleFindManyArgs
  ): Promise<AnalyticsRole[]> {
    return this.service.analyticsRoles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AnalyticsRole, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AnalyticsRole",
    action: "read",
    possession: "own",
  })
  async analyticsRole(
    @graphql.Args() args: AnalyticsRoleFindUniqueArgs
  ): Promise<AnalyticsRole | null> {
    const result = await this.service.analyticsRole(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AnalyticsRole)
  @nestAccessControl.UseRoles({
    resource: "AnalyticsRole",
    action: "delete",
    possession: "any",
  })
  async deleteAnalyticsRole(
    @graphql.Args() args: DeleteAnalyticsRoleArgs
  ): Promise<AnalyticsRole | null> {
    try {
      return await this.service.deleteAnalyticsRole(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
