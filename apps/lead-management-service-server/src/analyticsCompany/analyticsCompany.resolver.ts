import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsCompanyResolverBase } from "./base/analyticsCompany.resolver.base";
import { AnalyticsCompany } from "./base/AnalyticsCompany";
import { AnalyticsCompanyService } from "./analyticsCompany.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsCompany)
export class AnalyticsCompanyResolver extends AnalyticsCompanyResolverBase {
  constructor(
    protected readonly service: AnalyticsCompanyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
