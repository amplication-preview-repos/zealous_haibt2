import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsProfessionalModuleBase } from "./base/analyticsProfessional.module.base";
import { AnalyticsProfessionalService } from "./analyticsProfessional.service";
import { AnalyticsProfessionalController } from "./analyticsProfessional.controller";
import { AnalyticsProfessionalResolver } from "./analyticsProfessional.resolver";

@Module({
  imports: [AnalyticsProfessionalModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsProfessionalController],
  providers: [AnalyticsProfessionalService, AnalyticsProfessionalResolver],
  exports: [AnalyticsProfessionalService],
})
export class AnalyticsProfessionalModule {}
