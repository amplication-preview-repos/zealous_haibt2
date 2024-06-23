import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsSubscriptionResolverBase } from "./base/analyticsSubscription.resolver.base";
import { AnalyticsSubscription } from "./base/AnalyticsSubscription";
import { AnalyticsSubscriptionService } from "./analyticsSubscription.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsSubscription)
export class AnalyticsSubscriptionResolver extends AnalyticsSubscriptionResolverBase {
  constructor(
    protected readonly service: AnalyticsSubscriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
