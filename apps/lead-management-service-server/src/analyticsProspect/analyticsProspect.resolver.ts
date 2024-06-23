import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsProspectResolverBase } from "./base/analyticsProspect.resolver.base";
import { AnalyticsProspect } from "./base/AnalyticsProspect";
import { AnalyticsProspectService } from "./analyticsProspect.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsProspect)
export class AnalyticsProspectResolver extends AnalyticsProspectResolverBase {
  constructor(
    protected readonly service: AnalyticsProspectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
