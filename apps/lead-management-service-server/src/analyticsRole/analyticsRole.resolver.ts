import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsRoleResolverBase } from "./base/analyticsRole.resolver.base";
import { AnalyticsRole } from "./base/AnalyticsRole";
import { AnalyticsRoleService } from "./analyticsRole.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsRole)
export class AnalyticsRoleResolver extends AnalyticsRoleResolverBase {
  constructor(
    protected readonly service: AnalyticsRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
