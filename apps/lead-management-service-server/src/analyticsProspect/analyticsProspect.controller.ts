import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsProspectService } from "./analyticsProspect.service";
import { AnalyticsProspectControllerBase } from "./base/analyticsProspect.controller.base";

@swagger.ApiTags("analyticsProspects")
@common.Controller("analyticsProspects")
export class AnalyticsProspectController extends AnalyticsProspectControllerBase {
  constructor(
    protected readonly service: AnalyticsProspectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
