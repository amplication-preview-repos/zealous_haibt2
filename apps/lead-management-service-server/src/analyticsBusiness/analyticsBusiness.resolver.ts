import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsBusinessResolverBase } from "./base/analyticsBusiness.resolver.base";
import { AnalyticsBusiness } from "./base/AnalyticsBusiness";
import { AnalyticsBusinessService } from "./analyticsBusiness.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsBusiness)
export class AnalyticsBusinessResolver extends AnalyticsBusinessResolverBase {
  constructor(
    protected readonly service: AnalyticsBusinessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
