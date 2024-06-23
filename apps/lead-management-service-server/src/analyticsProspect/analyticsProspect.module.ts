import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsProspectModuleBase } from "./base/analyticsProspect.module.base";
import { AnalyticsProspectService } from "./analyticsProspect.service";
import { AnalyticsProspectController } from "./analyticsProspect.controller";
import { AnalyticsProspectResolver } from "./analyticsProspect.resolver";

@Module({
  imports: [AnalyticsProspectModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsProspectController],
  providers: [AnalyticsProspectService, AnalyticsProspectResolver],
  exports: [AnalyticsProspectService],
})
export class AnalyticsProspectModule {}
