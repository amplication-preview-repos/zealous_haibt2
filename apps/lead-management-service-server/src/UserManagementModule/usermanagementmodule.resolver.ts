import * as graphql from "@nestjs/graphql";
import { UserManagementModuleService } from "./usermanagementmodule.service";

export class UserManagementModuleResolver {
  constructor(protected readonly service: UserManagementModuleService) {}
}
