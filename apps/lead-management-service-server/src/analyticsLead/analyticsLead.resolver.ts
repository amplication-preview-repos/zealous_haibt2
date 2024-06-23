import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsLeadResolverBase } from "./base/analyticsLead.resolver.base";
import { AnalyticsLead } from "./base/AnalyticsLead";
import { AnalyticsLeadService } from "./analyticsLead.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsLead)
export class AnalyticsLeadResolver extends AnalyticsLeadResolverBase {
  constructor(
    protected readonly service: AnalyticsLeadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
