import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementModuleService } from "./usermanagementmodule.service";

@swagger.ApiTags("userManagementModules")
@common.Controller("userManagementModules")
export class UserManagementModuleController {
  constructor(protected readonly service: UserManagementModuleService) {}
}
