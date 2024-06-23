import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsLeadModuleBase } from "./base/analyticsLead.module.base";
import { AnalyticsLeadService } from "./analyticsLead.service";
import { AnalyticsLeadController } from "./analyticsLead.controller";
import { AnalyticsLeadResolver } from "./analyticsLead.resolver";

@Module({
  imports: [AnalyticsLeadModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsLeadController],
  providers: [AnalyticsLeadService, AnalyticsLeadResolver],
  exports: [AnalyticsLeadService],
})
export class AnalyticsLeadModule {}
