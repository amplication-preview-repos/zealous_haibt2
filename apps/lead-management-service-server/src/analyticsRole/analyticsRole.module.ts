import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsRoleModuleBase } from "./base/analyticsRole.module.base";
import { AnalyticsRoleService } from "./analyticsRole.service";
import { AnalyticsRoleController } from "./analyticsRole.controller";
import { AnalyticsRoleResolver } from "./analyticsRole.resolver";

@Module({
  imports: [AnalyticsRoleModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsRoleController],
  providers: [AnalyticsRoleService, AnalyticsRoleResolver],
  exports: [AnalyticsRoleService],
})
export class AnalyticsRoleModule {}
