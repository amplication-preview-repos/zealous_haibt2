import { Module } from "@nestjs/common";
import { TaskManagementModuleService } from "./taskmanagementmodule.service";
import { TaskManagementModuleController } from "./taskmanagementmodule.controller";
import { TaskManagementModuleResolver } from "./taskmanagementmodule.resolver";

@Module({
  controllers: [TaskManagementModuleController],
  providers: [TaskManagementModuleService, TaskManagementModuleResolver],
  exports: [TaskManagementModuleService],
})
export class TaskManagementModuleModule {}
