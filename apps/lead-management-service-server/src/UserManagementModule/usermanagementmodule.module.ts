import { Module } from "@nestjs/common";
import { UserManagementModuleService } from "./usermanagementmodule.service";
import { UserManagementModuleController } from "./usermanagementmodule.controller";
import { UserManagementModuleResolver } from "./usermanagementmodule.resolver";

@Module({
  controllers: [UserManagementModuleController],
  providers: [UserManagementModuleService, UserManagementModuleResolver],
  exports: [UserManagementModuleService],
})
export class UserManagementModuleModule {}
