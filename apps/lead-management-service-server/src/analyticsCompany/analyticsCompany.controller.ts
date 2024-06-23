import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsCompanyService } from "./analyticsCompany.service";
import { AnalyticsCompanyControllerBase } from "./base/analyticsCompany.controller.base";

@swagger.ApiTags("analyticsCompanies")
@common.Controller("analyticsCompanies")
export class AnalyticsCompanyController extends AnalyticsCompanyControllerBase {
  constructor(
    protected readonly service: AnalyticsCompanyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
