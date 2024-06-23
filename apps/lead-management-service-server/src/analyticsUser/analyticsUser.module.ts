import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsUserModuleBase } from "./base/analyticsUser.module.base";
import { AnalyticsUserService } from "./analyticsUser.service";
import { AnalyticsUserController } from "./analyticsUser.controller";
import { AnalyticsUserResolver } from "./analyticsUser.resolver";

@Module({
  imports: [AnalyticsUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsUserController],
  providers: [AnalyticsUserService, AnalyticsUserResolver],
  exports: [AnalyticsUserService],
})
export class AnalyticsUserModule {}
