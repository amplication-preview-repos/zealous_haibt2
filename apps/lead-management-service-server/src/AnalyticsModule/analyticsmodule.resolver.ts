import * as graphql from "@nestjs/graphql";
import { AnalyticsModuleService } from "./analyticsmodule.service";

export class AnalyticsModuleResolver {
  constructor(protected readonly service: AnalyticsModuleService) {}
}
