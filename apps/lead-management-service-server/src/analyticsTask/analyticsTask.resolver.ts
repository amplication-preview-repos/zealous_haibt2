import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsTaskResolverBase } from "./base/analyticsTask.resolver.base";
import { AnalyticsTask } from "./base/AnalyticsTask";
import { AnalyticsTaskService } from "./analyticsTask.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsTask)
export class AnalyticsTaskResolver extends AnalyticsTaskResolverBase {
  constructor(
    protected readonly service: AnalyticsTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
