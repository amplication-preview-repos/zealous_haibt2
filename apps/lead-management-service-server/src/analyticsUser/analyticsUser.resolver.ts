import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsUserResolverBase } from "./base/analyticsUser.resolver.base";
import { AnalyticsUser } from "./base/AnalyticsUser";
import { AnalyticsUserService } from "./analyticsUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsUser)
export class AnalyticsUserResolver extends AnalyticsUserResolverBase {
  constructor(
    protected readonly service: AnalyticsUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
