import * as graphql from "@nestjs/graphql";
import { LeadManagementModuleService } from "./leadmanagementmodule.service";

export class LeadManagementModuleResolver {
  constructor(protected readonly service: LeadManagementModuleService) {}
}
