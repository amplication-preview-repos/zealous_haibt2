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
import { AnalyticsUser } from "./AnalyticsUser";
import { AnalyticsUserCountArgs } from "./AnalyticsUserCountArgs";
import { AnalyticsUserFindManyArgs } from "./AnalyticsUserFindManyArgs";
import { AnalyticsUserFindUniqueArgs } from "./AnalyticsUserFindUniqueArgs";
import { DeleteAnalyticsUserArgs } from "./DeleteAnalyticsUserArgs";
import { AnalyticsUserService } from "../analyticsUser.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsUser)
export class AnalyticsUserResolverBase {
  constructor(
    protected readonly service: AnalyticsUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AnalyticsUser",
    action: "read",
    possession: "any",
  })
  async _analyticsUsersMeta(
    @graphql.Args() args: AnalyticsUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AnalyticsUser])
  @nestAccessControl.UseRoles({
    resource: "AnalyticsUser",
    action: "read",
    possession: "any",
  })
  async analyticsUsers(
    @graphql.Args() args: AnalyticsUserFindManyArgs
  ): Promise<AnalyticsUser[]> {
    return this.service.analyticsUsers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AnalyticsUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AnalyticsUser",
    action: "read",
    possession: "own",
  })
  async analyticsUser(
    @graphql.Args() args: AnalyticsUserFindUniqueArgs
  ): Promise<AnalyticsUser | null> {
    const result = await this.service.analyticsUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AnalyticsUser)
  @nestAccessControl.UseRoles({
    resource: "AnalyticsUser",
    action: "delete",
    possession: "any",
  })
  async deleteAnalyticsUser(
    @graphql.Args() args: DeleteAnalyticsUserArgs
  ): Promise<AnalyticsUser | null> {
    try {
      return await this.service.deleteAnalyticsUser(args);
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
