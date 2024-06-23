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
import { AnalyticsCompany } from "./AnalyticsCompany";
import { AnalyticsCompanyCountArgs } from "./AnalyticsCompanyCountArgs";
import { AnalyticsCompanyFindManyArgs } from "./AnalyticsCompanyFindManyArgs";
import { AnalyticsCompanyFindUniqueArgs } from "./AnalyticsCompanyFindUniqueArgs";
import { DeleteAnalyticsCompanyArgs } from "./DeleteAnalyticsCompanyArgs";
import { AnalyticsCompanyService } from "../analyticsCompany.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsCompany)
export class AnalyticsCompanyResolverBase {
  constructor(
    protected readonly service: AnalyticsCompanyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AnalyticsCompany",
    action: "read",
    possession: "any",
  })
  async _analyticsCompaniesMeta(
    @graphql.Args() args: AnalyticsCompanyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AnalyticsCompany])
  @nestAccessControl.UseRoles({
    resource: "AnalyticsCompany",
    action: "read",
    possession: "any",
  })
  async analyticsCompanies(
    @graphql.Args() args: AnalyticsCompanyFindManyArgs
  ): Promise<AnalyticsCompany[]> {
    return this.service.analyticsCompanies(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AnalyticsCompany, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AnalyticsCompany",
    action: "read",
    possession: "own",
  })
  async analyticsCompany(
    @graphql.Args() args: AnalyticsCompanyFindUniqueArgs
  ): Promise<AnalyticsCompany | null> {
    const result = await this.service.analyticsCompany(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AnalyticsCompany)
  @nestAccessControl.UseRoles({
    resource: "AnalyticsCompany",
    action: "delete",
    possession: "any",
  })
  async deleteAnalyticsCompany(
    @graphql.Args() args: DeleteAnalyticsCompanyArgs
  ): Promise<AnalyticsCompany | null> {
    try {
      return await this.service.deleteAnalyticsCompany(args);
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
