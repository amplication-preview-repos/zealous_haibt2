import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsUserService } from "./analyticsUser.service";
import { AnalyticsUserControllerBase } from "./base/analyticsUser.controller.base";

@swagger.ApiTags("analyticsUsers")
@common.Controller("analyticsUsers")
export class AnalyticsUserController extends AnalyticsUserControllerBase {
  constructor(
    protected readonly service: AnalyticsUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
