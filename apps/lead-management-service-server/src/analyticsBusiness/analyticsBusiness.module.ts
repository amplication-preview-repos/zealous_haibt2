import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsBusinessModuleBase } from "./base/analyticsBusiness.module.base";
import { AnalyticsBusinessService } from "./analyticsBusiness.service";
import { AnalyticsBusinessController } from "./analyticsBusiness.controller";
import { AnalyticsBusinessResolver } from "./analyticsBusiness.resolver";

@Module({
  imports: [AnalyticsBusinessModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsBusinessController],
  providers: [AnalyticsBusinessService, AnalyticsBusinessResolver],
  exports: [AnalyticsBusinessService],
})
export class AnalyticsBusinessModule {}
