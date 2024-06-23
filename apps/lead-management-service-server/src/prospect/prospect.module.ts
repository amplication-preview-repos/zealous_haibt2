import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProspectModuleBase } from "./base/prospect.module.base";
import { ProspectService } from "./prospect.service";
import { ProspectController } from "./prospect.controller";
import { ProspectResolver } from "./prospect.resolver";

@Module({
  imports: [ProspectModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProspectController],
  providers: [ProspectService, ProspectResolver],
  exports: [ProspectService],
})
export class ProspectModule {}
