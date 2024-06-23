import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TaskManagementModuleService } from "./taskmanagementmodule.service";

@swagger.ApiTags("taskManagementModules")
@common.Controller("taskManagementModules")
export class TaskManagementModuleController {
  constructor(protected readonly service: TaskManagementModuleService) {}
}
