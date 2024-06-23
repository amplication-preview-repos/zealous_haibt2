import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsAddressService } from "./analyticsAddress.service";
import { AnalyticsAddressControllerBase } from "./base/analyticsAddress.controller.base";

@swagger.ApiTags("analyticsAddresses")
@common.Controller("analyticsAddresses")
export class AnalyticsAddressController extends AnalyticsAddressControllerBase {
  constructor(
    protected readonly service: AnalyticsAddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
