import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsProfessionalService } from "./analyticsProfessional.service";
import { AnalyticsProfessionalControllerBase } from "./base/analyticsProfessional.controller.base";

@swagger.ApiTags("analyticsProfessionals")
@common.Controller("analyticsProfessionals")
export class AnalyticsProfessionalController extends AnalyticsProfessionalControllerBase {
  constructor(
    protected readonly service: AnalyticsProfessionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
