import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsCompanyModuleBase } from "./base/analyticsCompany.module.base";
import { AnalyticsCompanyService } from "./analyticsCompany.service";
import { AnalyticsCompanyController } from "./analyticsCompany.controller";
import { AnalyticsCompanyResolver } from "./analyticsCompany.resolver";

@Module({
  imports: [AnalyticsCompanyModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsCompanyController],
  providers: [AnalyticsCompanyService, AnalyticsCompanyResolver],
  exports: [AnalyticsCompanyService],
})
export class AnalyticsCompanyModule {}
