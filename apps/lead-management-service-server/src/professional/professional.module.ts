import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProfessionalModuleBase } from "./base/professional.module.base";
import { ProfessionalService } from "./professional.service";
import { ProfessionalController } from "./professional.controller";
import { ProfessionalResolver } from "./professional.resolver";

@Module({
  imports: [ProfessionalModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProfessionalController],
  providers: [ProfessionalService, ProfessionalResolver],
  exports: [ProfessionalService],
})
export class ProfessionalModule {}
