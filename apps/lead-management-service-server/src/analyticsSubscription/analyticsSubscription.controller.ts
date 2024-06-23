import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsSubscriptionService } from "./analyticsSubscription.service";
import { AnalyticsSubscriptionControllerBase } from "./base/analyticsSubscription.controller.base";

@swagger.ApiTags("analyticsSubscriptions")
@common.Controller("analyticsSubscriptions")
export class AnalyticsSubscriptionController extends AnalyticsSubscriptionControllerBase {
  constructor(
    protected readonly service: AnalyticsSubscriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
