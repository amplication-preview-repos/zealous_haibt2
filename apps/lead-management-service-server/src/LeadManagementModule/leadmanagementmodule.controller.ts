import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LeadManagementModuleService } from "./leadmanagementmodule.service";

@swagger.ApiTags("leadManagementModules")
@common.Controller("leadManagementModules")
export class LeadManagementModuleController {
  constructor(protected readonly service: LeadManagementModuleService) {}
}
