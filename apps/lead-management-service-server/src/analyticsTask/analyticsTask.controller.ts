import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsTaskService } from "./analyticsTask.service";
import { AnalyticsTaskControllerBase } from "./base/analyticsTask.controller.base";

@swagger.ApiTags("analyticsTasks")
@common.Controller("analyticsTasks")
export class AnalyticsTaskController extends AnalyticsTaskControllerBase {
  constructor(
    protected readonly service: AnalyticsTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
