import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalyticsModuleService } from "./analyticsmodule.service";

@swagger.ApiTags("analyticsModules")
@common.Controller("analyticsModules")
export class AnalyticsModuleController {
  constructor(protected readonly service: AnalyticsModuleService) {}
}
