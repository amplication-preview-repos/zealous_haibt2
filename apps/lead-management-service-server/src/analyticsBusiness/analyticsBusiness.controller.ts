import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsBusinessService } from "./analyticsBusiness.service";
import { AnalyticsBusinessControllerBase } from "./base/analyticsBusiness.controller.base";

@swagger.ApiTags("analyticsBusinesses")
@common.Controller("analyticsBusinesses")
export class AnalyticsBusinessController extends AnalyticsBusinessControllerBase {
  constructor(
    protected readonly service: AnalyticsBusinessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
