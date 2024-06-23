import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsAddressModuleBase } from "./base/analyticsAddress.module.base";
import { AnalyticsAddressService } from "./analyticsAddress.service";
import { AnalyticsAddressController } from "./analyticsAddress.controller";
import { AnalyticsAddressResolver } from "./analyticsAddress.resolver";

@Module({
  imports: [AnalyticsAddressModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsAddressController],
  providers: [AnalyticsAddressService, AnalyticsAddressResolver],
  exports: [AnalyticsAddressService],
})
export class AnalyticsAddressModule {}
