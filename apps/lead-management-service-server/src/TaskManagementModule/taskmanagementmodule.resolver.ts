import * as graphql from "@nestjs/graphql";
import { TaskManagementModuleService } from "./taskmanagementmodule.service";

export class TaskManagementModuleResolver {
  constructor(protected readonly service: TaskManagementModuleService) {}
}
