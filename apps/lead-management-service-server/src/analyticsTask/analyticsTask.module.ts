import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsTaskModuleBase } from "./base/analyticsTask.module.base";
import { AnalyticsTaskService } from "./analyticsTask.service";
import { AnalyticsTaskController } from "./analyticsTask.controller";
import { AnalyticsTaskResolver } from "./analyticsTask.resolver";

@Module({
  imports: [AnalyticsTaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsTaskController],
  providers: [AnalyticsTaskService, AnalyticsTaskResolver],
  exports: [AnalyticsTaskService],
})
export class AnalyticsTaskModule {}
