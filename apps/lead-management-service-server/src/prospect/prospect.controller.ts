import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProspectService } from "./prospect.service";
import { ProspectControllerBase } from "./base/prospect.controller.base";

@swagger.ApiTags("prospects")
@common.Controller("prospects")
export class ProspectController extends ProspectControllerBase {
  constructor(
    protected readonly service: ProspectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
