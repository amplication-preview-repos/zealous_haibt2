import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsAddressResolverBase } from "./base/analyticsAddress.resolver.base";
import { AnalyticsAddress } from "./base/AnalyticsAddress";
import { AnalyticsAddressService } from "./analyticsAddress.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsAddress)
export class AnalyticsAddressResolver extends AnalyticsAddressResolverBase {
  constructor(
    protected readonly service: AnalyticsAddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
