import { Module } from "@nestjs/common";
import { LeadManagementModuleService } from "./leadmanagementmodule.service";
import { LeadManagementModuleController } from "./leadmanagementmodule.controller";
import { LeadManagementModuleResolver } from "./leadmanagementmodule.resolver";

@Module({
  controllers: [LeadManagementModuleController],
  providers: [LeadManagementModuleService, LeadManagementModuleResolver],
  exports: [LeadManagementModuleService],
})
export class LeadManagementModuleModule {}
