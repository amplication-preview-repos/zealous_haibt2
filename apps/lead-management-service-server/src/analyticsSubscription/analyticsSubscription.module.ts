import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsSubscriptionModuleBase } from "./base/analyticsSubscription.module.base";
import { AnalyticsSubscriptionService } from "./analyticsSubscription.service";
import { AnalyticsSubscriptionController } from "./analyticsSubscription.controller";
import { AnalyticsSubscriptionResolver } from "./analyticsSubscription.resolver";

@Module({
  imports: [AnalyticsSubscriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsSubscriptionController],
  providers: [AnalyticsSubscriptionService, AnalyticsSubscriptionResolver],
  exports: [AnalyticsSubscriptionService],
})
export class AnalyticsSubscriptionModule {}
