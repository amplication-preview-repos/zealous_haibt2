import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsRoleService } from "./analyticsRole.service";
import { AnalyticsRoleControllerBase } from "./base/analyticsRole.controller.base";

@swagger.ApiTags("analyticsRoles")
@common.Controller("analyticsRoles")
export class AnalyticsRoleController extends AnalyticsRoleControllerBase {
  constructor(
    protected readonly service: AnalyticsRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
