import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsLeadService } from "./analyticsLead.service";
import { AnalyticsLeadControllerBase } from "./base/analyticsLead.controller.base";

@swagger.ApiTags("analyticsLeads")
@common.Controller("analyticsLeads")
export class AnalyticsLeadController extends AnalyticsLeadControllerBase {
  constructor(
    protected readonly service: AnalyticsLeadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
